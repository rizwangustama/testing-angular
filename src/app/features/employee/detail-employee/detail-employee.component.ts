import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Employee, EmployeeStatus, EmployeeGroup, EmployeeGroupName, EmployeeGroupDescription } from '../../../models/employee-model.models';
import { EmployeeServices } from '../../../services/employee.service'
import { MessageService} from 'primeng/api';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrl: './detail-employee.component.css'
})
export class DetailEmployeeComponent implements OnInit {

  public form!: FormGroup;
  public id!: number;
  public employee!: Employee[];
  public detailEmployee!: any;
  public isDisabled: boolean = false;
  public maxDate: Date = new Date();
  public title!: string;
  public listStatus: EmployeeStatus[] = [];
  public listGroup!: EmployeeGroup[];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private employeeServices: EmployeeServices,
    private messageService: MessageService
    
  ) { }

  async ngOnInit(): Promise<void> {
    this.id = parseInt(this.getId());
    this.id >= 0 ? this.title = 'Edit Employee' : this.title = 'Add Employee';
    this.form = this.fb.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.email],
      birthDate: ['', Validators.required],
      basicSalary: ['', Validators.required],
      status: ['', Validators.required],
      group: ['', Validators.required],
      description: ['', Validators.required],
    });

    await this.getDetailEmployee();
    this.getListStatusEmployee();
    this.listGroup = this.employeeServices.getListEmployeeGroup();
    this.fieldForm();
  }

  onCancel() : void {
    this.router.navigate(['/employee']);
  }

  async getDetailEmployee() {
    this.detailEmployee = await this.employeeServices.getEmployeeById(this.id);
  }

  getListStatusEmployee() {
    this.listStatus = this.employeeServices.getListStatus();
  }

  generateRandomId() {
    return Math.floor(Math.random() * 1000);
  }

  onSubmit() : void {
    if (this.form.valid) {
      if (this.id >= 0) {
        const updatedEmployee: Employee = {
          id: this.id,
          ...this.form.value
        };
        let success = this.employeeServices.updateEmployee(updatedEmployee);
        this.showSuccess('Update Data Employee Success');
        this.router.navigate(['/employee']);
      } else {
        const newEmployee: Employee = {
          id: this.generateRandomId(),
          ...this.form.value
        }
        let success = this.employeeServices.addEmployee(newEmployee);
        this.showSuccess('Add Data Employee Success');
        this.router.navigate(['/employee']);
      }
    }
  }

  public fieldForm() {
    this.form.patchValue({
      username: this.detailEmployee.username,
      firstName: this.detailEmployee.firstName,
      lastName: this.detailEmployee.lastName,
      email: this.detailEmployee.email,
      birthDate: this.detailEmployee.birthDate,
      basicSalary: this.detailEmployee.basicSalary,
      status: this.detailEmployee.status,
      group: this.detailEmployee.group,
      description: this.detailEmployee.description
    });

    console.log(this.form.value)
  }
  getId() {
    return this.route.snapshot.params['id'] ? this.route.snapshot.params['id'] : -1;
  }

  get f() { return this.form.controls; }

  get username() { return this.form.get('username'); }

  get password() { return this.form.get('password'); }

  hasError(controlName: string, errorName: string) {
    return this.form.get(controlName)?.hasError(errorName);
  }

  public showSuccess(Content?: string) {
    this.messageService.add({severity:'success', summary: 'Success', detail: Content || 'Completed Success'});
  }

  public showError(Content?: string) {
    this.messageService.add({severity: 'error', summary: 'Error Message', detail: Content || 'Error Message'});
  }

  public showWarning(Content?: string) {
    this.messageService.add({severity: 'warn', summary: 'Warn Message', detail: Content || 'Warn Message'});
  }
}
