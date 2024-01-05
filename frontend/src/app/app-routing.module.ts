import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {TaskViewComponent} from "./components/task-view/task-view.component";
import {NewListComponent} from "./components/new-list/new-list.component";

const routes: Routes = [
  {
    path: "", component: TaskViewComponent
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
