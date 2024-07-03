import { Injectable } from '@angular/core';
import { EmployeeServices } from '../../services/employee.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
    listUser!: any[];
    constructor(private employeeServices: EmployeeServices) {
        this.listUser = this.employeeServices.getEmployees();
    }
    private isLoggedIn = false;

    login(username: string, password: string): boolean {
        console.log(username, password);
        const filterUser = this.listUser.find(user => ( user.username === username || user.email === username ) && user.password === password);
        if (filterUser) {
            this.isLoggedIn = true;
            return true;
        }
        return false;
    }

    logout(): void {
        this.isLoggedIn = false;
    }

    isAuthenticated(): boolean {
        return this.isLoggedIn;
    }
}