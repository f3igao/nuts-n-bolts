import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-army',
  templateUrl: './army.component.html',
  styleUrls: ['./army.component.scss']
})
export class ArmyComponent implements OnInit {
  a11yStatus: string;

  constructor(
    private route: ActivatedRoute,
  ) {
    this.a11yStatus = route.snapshot.params.status;
  }

  ngOnInit(): void {
    console.log(this.a11yStatus);
  }
}
