import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-time-trail',
  templateUrl: './create-time-trail.component.html',
  styleUrls: ['./create-time-trail.component.css']
})
export class CreateTimeTrailComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {
  }
  timeTrailForm = this.formBuilder.group({
    competitionName: ['', Validators.required],
    items: [Array<string>(), Validators.required, Validators.minLength(1)]
  });
  wielrenner?: string;
  ngOnInit(): void { }

  onSubmit(): void {
  }


  add(message: HTMLInputElement): void {
    this.timeTrailForm.value.items.push(message.value);
    message.value = '';
  }
  deleteItem(message: string): void {
    const newItems = Array<string>();
    this.timeTrailForm.value.items.forEach((element: string) => {
      if (element !== message){
        newItems.push(element);
      }
    });
    this.timeTrailForm.value.items = newItems;
  }
}
