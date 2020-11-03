import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-target-source',
  templateUrl: './input-target-source.component.html',
  styleUrls: ['./input-target-source.component.css']
})
export class InputTargetSourceComponent implements OnInit {


  myControl = new FormControl();
  options: string[] = ['ירושלים', 'תל-אביב', 'חיפה'];
  //אפשר לקחת את הנתונים מה
  //api של data.gov
  @Output() calculateClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  calculate(){
    this.calculateClicked.emit();
  }
}

