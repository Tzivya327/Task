import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-result-details',
  templateUrl: './result-details.component.html',
  styleUrls: ['./result-details.component.css']
})
export class ResultDetailsComponent implements OnInit {

  @Output() closeClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  close(){
    this.closeClicked.emit();
  }

}
