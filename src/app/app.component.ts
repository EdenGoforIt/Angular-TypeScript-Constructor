import { Component, VERSION } from '@angular/core';
import { EmployeeOne } from './models/employee-one';
import { EmployeeTwo } from './models/employee-two';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  employee = new EmployeeOne(1, 'One');
  employeeTwo = new EmployeeTwo(1, 'Two');
}
