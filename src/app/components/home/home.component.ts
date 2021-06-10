import {Component, Input, OnInit} from '@angular/core';
import {Competitions} from '../../models/enumations/Competitions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() sport?: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  setSport(sport: string): void {
    this.sport = sport;
  }

  setCompetition(event: any): void {
    console.log(event);
    if (event === Competitions.TIMETRAIL){
    console.log('TimeTrail');
    this.router.navigateByUrl('/create-timetrail');
    } else {
      console.log('not implemented');
    }
  }
}
