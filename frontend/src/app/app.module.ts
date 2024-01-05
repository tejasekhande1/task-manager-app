import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TaskViewComponent} from './components/task-view/task-view.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {NewListComponent} from './components/new-list/new-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "list",
    pathMatch: "full"
  }, {
    path: "new-list", component: NewListComponent
  }, {
    path: "list", component: TaskViewComponent
  }, {
    path: "list/:listId", component: TaskViewComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TaskViewComponent,
    NewListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
