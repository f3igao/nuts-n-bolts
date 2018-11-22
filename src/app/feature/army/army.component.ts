import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IRobot } from 'src/app/models/robot.interface';
import * as faker from 'faker';

@Component({
  selector: 'app-army',
  templateUrl: './army.component.html',
  styleUrls: ['./army.component.scss']
})
export class ArmyComponent implements OnInit {
  accessibleExample: boolean;
  robotArmy: IRobot[] = [];

  constructor(
    private route: ActivatedRoute,
  ) {
    this.accessibleExample = route.snapshot.params.status === 'good' ? true : false;
  }

  ngOnInit(): void {
    this.buildRobotArmy();
  }

  buildRobotArmy(): void {
    const randomCount = Math.floor(Math.random() * 20) + 2;  // a random integer from 2 to 20
    for (let i = 0; i < randomCount; i++) {
      this.robotArmy.push(this.buildRobot());
    }
  }

  buildRobot(): IRobot {
    const avatarBaseUrl = 'https://robohash.org/YOUR-TEXT.png';
    const imageUrl = avatarBaseUrl.replace('YOUR-TEXT', faker.random.word());
    // const imageUrl = faker.image.avatar();
    return {
      name: faker.name.firstName(),
      dob: faker.date.past().toString().split(' GMT-')[0],
      division: faker.commerce.department(),
      capabilities: this.buildCapabilities(),
      intel: faker.random.arrayElement(['ani', 'agi', 'asi']),
      image: imageUrl,
      description: faker.lorem.paragraph(),
      flipped: false,
    };
  }

  buildCapabilities(): string[] {
    const capabilities = [];
    const randomCount = Math.floor(Math.random() * 10) + 1;  // a random integer from 1 to 10
    for (let i = 0; i < randomCount; i++) {
      capabilities.push(faker.random.word());
    }
    return capabilities;
  }

  flipCard(i) {
    this.robotArmy[i].flipped = !this.robotArmy[i].flipped;
  }
}
