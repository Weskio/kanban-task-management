import { Component } from '@angular/core';
import { DataService } from '../../../controller/data.service';
import { DashboardFrameComponent } from '../../components/dashboard-frame/dashboard-frame.component';
import { AddTaskComponent } from "../../modals/add-task/add-task.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [DashboardFrameComponent, AddTaskComponent]
})
export class HomeComponent {
  // constructor(private dataservice: DataService){}
  // data: any
  // ngOnInit(){
  //  this.dataservice.getData().subscribe(data =>  {this.data = data; return this.data})
  //   console.log(this.data)
  // }
}
