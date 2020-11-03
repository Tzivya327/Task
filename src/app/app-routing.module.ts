import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskContainerComponent } from './components/task-container/task-container.component';


const routes: Routes = [
  {
    path: '',
    component:TaskContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
