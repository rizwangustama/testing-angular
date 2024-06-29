import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../core/services/auth.service';
import { EmployeeServices } from '../../services/employee.services'

interface Employee {
  username: string,
  firstName: string,
  lastName: string,
  email: string,
  birthDate: Date,
  basicSalary: number,
  status: string,
  group: string,
  description: string,
  password: string
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})

export class AuthComponent implements OnInit {
  user: Employee = {
    username: 'admin',
    firstName: 'admin',
    lastName: 'admin',
    email: 'admin',
    birthDate: new Date(),
    basicSalary: 0,
    status: 'admin',
    group: 'admin',
    description: 'admin',
    password: 'admin',
  }

  listEmployee: Employee[] = []

  formLogin!: FormGroup;
  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private messageService: MessageService,
    private authService: AuthService,
    private employeeServices: EmployeeServices,
  ) {
  }
  public value: string = '';

  ngOnInit(): void {
    this.listEmployee =  this.employeeServices.getEmployees();
    this.formLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  async onSubmit() {
    if (this.formLogin.valid) {
      const { username, password } = this.formLogin.value;
      if (this.authService.login(username, password)) {
        await this.router.navigate(['/employee']);
        this.showSuccess();
      } else {
        this.showError('Username or Password is incorrect');
      }
    } else {
      this.showError('Username or Password is incorrect');
    }
  }

  public showSuccess(Content?: string) {
    this.messageService.add({severity:'success', summary: 'Success', detail: Content || 'Completed Success'});
  }

  public showError(Content?: string) {
    this.messageService.add({severity: 'error', summary: 'Error Message', detail: Content || 'Error Message'});
  }
  
  get username() { return this.formLogin.get('username'); }

  get password() { return this.formLogin.get('password'); }
}
