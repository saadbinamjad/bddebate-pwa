import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MOTIONS } from './motion-list';
import { Motion } from './motion.class';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public form: FormGroup;
  public index: number = 0;
  public motion = null;
  public randomMotion = null;
  public newList: any = {};
  public searchResults: any = null;
  public searchState: boolean = false;
  public errorMessage: string = null;

  ngOnInit() {
    this.initForm();
    this.initMotion();

  }

  private initForm() {
    this.form = new FormGroup({
      text: new FormControl(null),
      query: new FormControl(null)
    });
  }

  private initMotion() {
    const list = this.getMotions();
    this.motion = list[0].text.split('\n');
    const array = [];

    for (let motion of this.motion) {
      if (motion != '' && motion.length > 30) {
        array[this.index] = motion;
        this.index++;
      }
    }
    this.motion = array;
    this.getRandomMotion();

  }

  private getMotions(): Motion[] {
    return MOTIONS;
  }

  public getRandomMotion() {
    const randomNumberWithinRange = Math.random() * (this.index - 0) + 0;
    const randomIndex = parseInt(JSON.stringify(randomNumberWithinRange), 10);
    this.randomMotion = this.motion[randomIndex];
  }

  public search() {

    const query = this.form.controls['query'].value;
    const filteredArray = [];

    this.motion.filter(function (motion) {
      if (motion.includes(query)) {
        filteredArray.push(motion);
      }
    });

    this.searchResults = filteredArray;
    this.errorMessage = (this.searchResults.length === 0) ? 'No motions matched the keyword.' : null;
  }
}




