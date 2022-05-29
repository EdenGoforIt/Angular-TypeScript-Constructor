export class EmployeeFive {
  code: number;
  name: string;

  constructor(employee: Partial<EmployeeFive>) {
    Object.assign(this, employee);
  }
}
