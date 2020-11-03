import { Injectable } from '@angular/core';
import { PopularItem } from '../models/popular-item.model';

@Injectable({
  providedIn: 'root'
})
export class NbsTaskService {

  popularList : Array<PopularItem>;

  constructor() { }

  GetDistance(){

    //this.dataService.getAsPromise('http://moe-dev-xrm-f19:8080/NewMaof/Requirements/Sviva.Xrm.Requirements.WebApiClient/api/v1/distance').then((distance) => {
      //debugger;
    //}).catch(error => {
      //console.log(error);
    //});
  }

  GetPopularResults(){
    debugger;

    this.popularList = new Array<PopularItem>();
  }

}
