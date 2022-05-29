export class EmployeeSix {
  code: number;
  name: string;

  constructor(employee: Partial<EmployeeSix> = {}) {
    // this.code = employee?.code;
    // this.name = employee?.name;
    // or
    Object.assign(this, employee);
  }
}
