import { Injectable } from '@angular/core';
import { Employee, EmployeeStatus } from '../models/employee-model.models';
import { Subscription, timer } from 'rxjs';
import { MessageService } from 'primeng/api';

@Injectable({ providedIn: 'root' })

export class EmployeeServices {
    constructor(private messageService: MessageService) { }
    private employees: Employee[] = [
        {
            id: 1,
            username: 'User1',
            firstName: 'First1',
            lastName: 'Last1',
            email: 'email1@example.com',
            birthDate: new Date(),
            basicSalary: 1000,
            status: EmployeeStatus.Active,
            group: 'Group1',
            description: 'Description1',
            password: 'Password1',
        },
        {
            id: 2,
            username: 'User2',
            firstName: 'First2',
            lastName: 'Last2',
            email: 'email2@example.com',
            birthDate: new Date(),
            basicSalary: 2000,
            status: EmployeeStatus.Inactive,
            group: 'Group2',
            description: 'Description2',
            password: 'Password2',
        },
        {
            id: 3,
            username: 'User3',
            firstName: 'First3',
            lastName: 'Last3',
            email: 'email3@example.com',
            birthDate: new Date(),
            basicSalary: 3000,
            status: EmployeeStatus.Active,
            group: 'Group3',
            description: 'Description3',
            password: 'Password3',
        },
        {
            id: 4,
            username: 'User4',
            firstName: 'First4',
            lastName: 'Last4',
            email: 'email4@example.com',
            birthDate: new Date(),
            basicSalary: 4000,
            status: EmployeeStatus.Inactive,
            group: 'Group4',
            description: 'Description4',
            password: 'Password4',
        },
        {
            id: 5,
            username: 'User5',
            firstName: 'First5',
            lastName: 'Last5',
            email: 'email5@example.com',
            birthDate: new Date(),
            basicSalary: 5000,
            status: EmployeeStatus.Active,
            group: 'Group5',
            description: 'Description5',
            password: 'Password5',
        },
        {
            id: 6,
            username: 'User6',
            firstName: 'First6',
            lastName: 'Last6',
            email: 'email6@example.com',
            birthDate: new Date(),
            basicSalary: 6000,
            status: EmployeeStatus.Active,
            group: 'Group6',
            description: 'Description6',
            password: 'Password6',
        },
        {
            id: 7,
            username: 'User7',
            firstName: 'First7',
            lastName: 'Last7',
            email: 'email7@example.com',
            birthDate: new Date(),
            basicSalary: 7000,
            status: EmployeeStatus.Active,
            group: 'Group7',
            description: 'Description7',
            password: 'Password7',
        },
        {
            id: 8,
            username: 'User8',
            firstName: 'First8',
            lastName: 'Last8',
            email: 'email8@example.com',
            birthDate: new Date(),
            basicSalary: 8000,
            status: EmployeeStatus.Active,
            group: 'Group8',
            description: 'Description8',
            password: 'Password8',
        },
        {
            id: 9,
            username: 'User9',
            firstName: 'First9',
            lastName: 'Last9',
            email: 'email9@example.com',
            birthDate: new Date(),
            basicSalary: 9000,
            status: EmployeeStatus.Active,
            group: 'Group9',
            description: 'Description9',
            password: 'Password9',
        },
        {
            id: 10,
            username: 'User10',
            firstName: 'First10',
            lastName: 'Last10',
            email: 'email10@example.com',
            birthDate: new Date(),
            basicSalary: 10000,
            status: EmployeeStatus.Active,
            group: 'Group10',
            description: 'Description10',
            password: 'Password10',
        }
    ]

    getEmployees(): Employee[] {
        return this.employees;
    }

    getEmployeeById(id: number): Employee | undefined {
        return this.employees.find(employee => employee.id === id);
    }

    updateEmployee(employee: Employee): void {
        const index = this.employees.findIndex(e => e.id === employee.id);
        if (index !== -1) {
            this.employees[index] = employee;
            console.log('Employee updated successfully');
        }
    }

    addEmployee(employee: Employee): void {
        this.employees.push(employee);
        console.log('Employee added successfully');
    }
}