import { Component, VERSION } from '@angular/core';
import { EmployeeOne } from './models/employee-one';
import { EmployeeTwo } from './models/employee-two';
import { EmployeeThree } from './models/employee-three';
import { EmployeeFour } from './models/employee-four';
import { EmployeeFive } from './models/employee-five';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  employee = new EmployeeOne(1, 'One');
  employeeTwo = new EmployeeTwo(1, 'Two');
  employeeThree = new EmployeeThree({ code: 1, name: 'Three' });
  employeeFour = new EmployeeFour({ code: 1, name: 'Four' });
  employeeFive = new EmployeeFive({ code: 1, name: 'Five' });
}
