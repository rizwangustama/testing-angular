import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, PrimeIcons, MenuItem, MessageService } from 'primeng/api';
import { Employee, EmployeeStatus, EmployeeGroup, EmployeeGroupName, EmployeeGroupDescription } from '../../models/employee-model.models';
import { EmployeeServices } from '../../services/employee.services'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

  constructor(
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private employeeServices: EmployeeServices,
  ) {
  }

  items: MenuItem[] = [
    {
      label: 'Home',
      icon: PrimeIcons.HOME,
      routerLink: '/',
    },
    {
      label: 'Delete',
      icon: PrimeIcons.DELETE_LEFT,
    },
  ];

  public employees: Employee[] = [];
  public listGroup: EmployeeGroup[] = [];
  loading: boolean = true;
  searchValue: string | undefined;
  activityValues: number[] = [0, 100];
  globalFilter: string | undefined;
  public title: string = 'Employee List';



  async ngOnInit(): Promise<void> {
    this.listGroup = this.employeeServices.getListEmployeeGroup();
    let res = this.employeeServices.getEmployees();
    if (res) {
      this.employees = res;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    }
  }

  public formatDate(date: Date) {
    const today = new Date(date);
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  }

  confirmDeleteEmployee(id: number): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this employee?',
      accept: () => {
        this.handleDelete(id);
        this.showError('Deleted data employee Success', 'Success Message');
      }
    });
  }

  public handleEdit(id: number) {
    this.router.navigate(['/employee/' + id]);
  }

  public handleAdd() {
    this.router.navigate(['/employee/add']);
  }

  public handleDelete(id: number) {
    let index = this.employees.findIndex(x => x.id === id);
    if (index !== -1) {
      this.employees.splice(index, 1);
    }
  }

  public showSuccess(Content?: string) {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: Content || 'Completed Success' });
  }

  public showError(Content?: string, error?: string) {
    this.messageService.add({ severity: 'error', summary: error || 'Error Message', detail: Content || 'Error Message' });
  }

  getUnitCode(event: string) {
    const filterDescription = this.listGroup.find((x: any) => x.description === event);
    return filterDescription?.name;
    
  }
}
