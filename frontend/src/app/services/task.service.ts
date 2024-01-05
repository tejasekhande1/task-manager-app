import {Injectable} from '@angular/core';
import {WebService} from "./web.service";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webService: WebService) {
  }

  createList(title: string) {
    return this.webService.post("list", {title})
  }

  getList() {
    return this.webService.get("list")
  }
}
