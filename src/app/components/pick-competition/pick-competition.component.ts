import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Sports} from '../../models/enumations/Sports';
import {Competitions} from '../../models/enumations/Competitions';

@Component({
  selector: 'app-pick-competition',
  templateUrl: './pick-competition.component.html',
  styleUrls: ['./pick-competition.component.css']
})
export class PickCompetitionComponent implements OnInit {

  @Input() sport?: string;
  @Output() competitionEmitter = new EventEmitter();
  competitionList: any = this.getList();

  constructor() {
  }

  form: any;

  get f(): any {
    return this.form.controls;
  }

  submit(): void {
    console.log(this.competitionList[0]);
    console.log(this.form.value.competition);
    this.competitionEmitter.emit(this.form.value.competition);
  }

  changeCompetition(e: any): void {
  }

  ngOnInit(): void {
    this.competitionList = this.getList();
    this.form = new FormGroup({
      competition: new FormControl(this.competitionList[0])
    });
  }

  getList(): any {
    return this.sport === Sports.FOOTBALL ?
      [Competitions.KNOCKOUT, Competitions.CHAMPOINSHIP] :
      this.sport === Sports.BICLYCE ?
        [Competitions.TIMETRAIL] :
        null;
  }

}
