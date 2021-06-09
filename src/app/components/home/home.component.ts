import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() sport?: string;
  constructor() { }

  ngOnInit(): void {
  }

  setSport(sport: string): void {
    this.sport = sport;
  }

  setCompetition($event: any): void {
    console.log('competion set');
  }
}
