import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { IRobot } from 'src/app/models/feature.interface';
import * as faker from 'faker';

@Component({
  selector: 'app-army',
  templateUrl: './army.component.html',
  styleUrls: ['./army.component.scss'],
})
export class ArmyComponent implements OnInit {
  accessibleExample = true;
  robotArmy: IRobot[] = [];
  navigationSubscription;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((event: any) => {
      // subscribe to route change; re-initalise the component on a NavigationEnd event
      if (event instanceof NavigationEnd) {
        this.accessibleExample =
          route.snapshot.params.status === 'good' ? true : false;
      }
    });
  }

  ngOnInit(): void {
    this.buildRobotArmy();
  }

  buildRobotArmy(): void {
    const randomCount = Math.floor(Math.random() * 20) + 2; // a random integer from 2 to 20
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
    const randomCount = Math.floor(Math.random() * 10) + 1; // a random integer from 1 to 10
    for (let i = 0; i < randomCount; i++) {
      capabilities.push(faker.random.word());
    }
    return capabilities;
  }

  flipCard(i: number): void {
    this.robotArmy[i].flipped = !this.robotArmy[i].flipped;
  }

  toggleAccessibility(): void {
    this.accessibleExample = !this.accessibleExample;
    const status = this.accessibleExample === true ? '/good' : '/bad';
    this.router.navigate([`/army${status}`]);
  }
}
