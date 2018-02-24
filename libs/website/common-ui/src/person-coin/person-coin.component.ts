import {Component, Input, OnInit} from '@angular/core';

interface PersonCoinInfo {
  fullName: string;
  twitterHandle?: string;
  avatarUrl?: string;
}

@Component({
  selector: 'person-coin',
  templateUrl: './person-coin.component.html',
  styleUrls: ['./person-coin.component.scss']
})
export class PersonCoinComponent implements OnInit {
  @Input() person: PersonCoinInfo;

  constructor() {}

  ngOnInit() {}
}
