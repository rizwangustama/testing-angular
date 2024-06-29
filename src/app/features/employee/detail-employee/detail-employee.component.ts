import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Employee } from '../../../models/employee-model.models';
import { EmployeeServices } from '../../../services/employee.services'
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrl: './detail-employee.component.css'
})
export class DetailEmployeeComponent implements OnInit {

  form!: FormGroup;
  id!: number;
  employee!: Employee[];
  detailEmployee!: any;
  public isDisabled: boolean = false;
  maxDate: Date = new Date();
  public listStatus: any[] = [
    {
      name: 'Active',
      value: 'Active'
    },
    {
      name: 'Inactive',
      value: 'Inactive'
    }
  ];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private employeeServices: EmployeeServices,
    private messageService: MessageService
    
  ) { }

  async ngOnInit(): Promise<void> {
    this.id = parseInt(this.getId());
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      birthDate: ['', Validators.required],
      basicSalary: ['', Validators.required],
      status: ['', Validators.required],
      group: ['', Validators.required],
      description: ['', Validators.required],
    });

    await this.getDetailEmployee();
    this.fieldForm();
  }

  async getDetailEmployee() {
    this.detailEmployee = await this.employeeServices.getEmployeeById(this.id);
  }

  onSubmit() : void {
    if (this.form.valid) {
      const updatedEmployee: Employee = {
        id: this.id,
        ...this.form.value
      };
      let success = this.employeeServices.updateEmployee(updatedEmployee);
      this.showWarning('Update Success');
      this.router.navigate(['/employee']);
    }
  }

  public fieldForm() {
    this.form.patchValue({
      username: this.detailEmployee.username,
      password: this.detailEmployee.password,
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
    return this.route.snapshot.params['id'];
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
