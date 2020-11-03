import { Component, OnInit } from '@angular/core';
import { NbsTaskService } from '../../services/nbs-task.service';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.css']
})
export class TaskContainerComponent implements OnInit {

  constructor(private myService: NbsTaskService) { }

  isShowResulteDetails: boolean = false;

  ngOnInit() {
  }

  showResultes(){
    this.myService.GetDistance();
    this.isShowResulteDetails = true;
  }

}

