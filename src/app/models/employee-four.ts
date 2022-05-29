export class EmployeeFour {
  code: number;
  name: string;

  constructor(employee: EmployeeFour) {
    Object.assign(this, employee);
  }
}
