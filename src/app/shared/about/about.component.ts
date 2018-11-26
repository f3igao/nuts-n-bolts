import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutPara: string[] = [];

  constructor() { }

  ngOnInit() {
    this.buildPara(5);
  }

  buildPara(num) {
    for (let i = 0; i < num; i++) {
      this.aboutPara.push(faker.lorem.paragraphs());
    }
  }
}
