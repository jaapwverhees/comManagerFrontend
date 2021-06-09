import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Sports} from '../../models/enumations/Sports';

@Component({
  selector: 'app-pick-sport',
  templateUrl: './pick-sport.component.html',
  styleUrls: ['./pick-sport.component.css']
})
export class PickSportComponent implements OnInit {

  @Output() sportEmitter = new EventEmitter();
  sportList: any = [Sports.BICLYCE, Sports.FOOTBALL];
  form = new FormGroup({
    sport: new FormControl(this.sportList[0])
  });
  get f(): any{
    return this.form.controls;
  }
  constructor() {
  }
  submit(): void{
    this.sportEmitter.emit(this.form.value.sport);
  }
  changeSport(e: any): void {
  }
  ngOnInit(): void {
  }
}
