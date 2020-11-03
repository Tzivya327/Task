import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PopularItemComponent } from './components/popular-item/popular-item.component';
import { PopularListComponent } from './components/popular-list/popular-list.component';
import { ResultDetailsComponent } from './components/result-details/result-details.component';
import { TaskContainerComponent } from './components/task-container/task-container.component';
import { InputTargetSourceComponent } from './components/input-target-source/input-target-source.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    PopularItemComponent,
    PopularListComponent,
    ResultDetailsComponent,
    TaskContainerComponent,
    InputTargetSourceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
