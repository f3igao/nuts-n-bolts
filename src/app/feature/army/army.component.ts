import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as faker from 'faker';

@Component({
  selector: 'app-army',
  templateUrl: './army.component.html',
  styleUrls: ['./army.component.scss']
})
export class ArmyComponent implements OnInit {
  accessibleExample: boolean;
  robotArmy = [];

  constructor(
    private route: ActivatedRoute,
  ) {
    this.accessibleExample = route.snapshot.params.status === 'good' ? true : false;
  }

  ngOnInit(): void {
    this.buildRobotArmy();
    console.log(this.robotArmy);
  }

  buildRobotArmy(): void {
    for (let i = 0; i < faker.random.number(50); i++) {
      this.robotArmy.push(this.buildRobot());
    }
  }

  buildRobot(): any {
    return {
      name: faker.name.firstName(),
      dob: faker.date.past().toString().split(' GMT-')[0],
      division: faker.commerce.department(),
      capabilities: this.buildCapabilities(),
      intel: faker.random.arrayElement(['ani', 'agi', 'asi']),
      image: faker.image.avatar(),
    };
  }

  buildCapabilities(): string[] {
    const capabilities = [];
    for (let i = 0; i < faker.random.number(10); i++) {
      capabilities.push(faker.random.word());
    }
    return capabilities;
  }
}
