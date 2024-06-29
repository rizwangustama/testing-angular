import { Injectable } from '@angular/core';
import { Employee, EmployeeStatus, EmployeeStatusDescription, EmployeeStatusName, EmployeeGroupName, EmployeeGroupDescription, EmployeeGroup } from '../models/employee-model.models';
import { Subscription, timer } from 'rxjs';
import { MessageService } from 'primeng/api';

@Injectable({ providedIn: 'root' })

export class EmployeeServices {
    constructor(private messageService: MessageService) { }

    public listStatus: EmployeeStatus[] = [
        {
            name: EmployeeStatusName.Active,
            description: EmployeeStatusDescription.Active
        }
        ,
        {
            name: EmployeeStatusName.Inactive,
            description: EmployeeStatusDescription.Inactive
        }
    ]

    public listGroup: EmployeeGroup[] = [
        {
            name: EmployeeGroupName.DEVELOPER,
            description: EmployeeGroupDescription.DEVELOPER
        },
        {
            name: EmployeeGroupName.HR,
            description: EmployeeGroupDescription.HR
        },
        {
            name: EmployeeGroupName.SALE,
            description: EmployeeGroupDescription.SALE,
        },
        {
            name: EmployeeGroupName.MARKETING,
            description: EmployeeGroupDescription.MARKETING
        },
        {
            name: EmployeeGroupName.ADMIN,
            description: EmployeeGroupDescription.ADMIN
        },
        {
            name: EmployeeGroupName.ACCOUNTANT,
            description: EmployeeGroupDescription.ACCOUNTANT
        },
        {
            name: EmployeeGroupName.STAFF,
            description: EmployeeGroupDescription.STAFF
        },
        {
            name: EmployeeGroupName.PROJECT_MANAGER,
            description: EmployeeGroupDescription.PROJECT_MANAGER
        },
        {
            name: EmployeeGroupName.MANAGER,
            description: EmployeeGroupDescription.MANAGER
        },
        {
            name: EmployeeGroupName.DIRECTOR,
            description: EmployeeGroupDescription.DIRECTOR
        }
    ]

    private employees: Employee[] = [
        {
            id: 1,
            username: 'rizwangustama',
            firstName: 'Rizwan',
            lastName: 'Gustama',
            email: 'email1@example.com',
            birthDate: new Date(1999, 9, 8),
            basicSalary: 1000,
            status: EmployeeStatusDescription.Active,
            group: 'DEVELOPER',
            description: 'Description1',
            password: 'Password1',
        },
        {
            id: 2,
            username: 'johnsmith',
            firstName: 'John',
            lastName: 'Smith',
            email: 'john.smith@example.com',
            birthDate: new Date(1990, 7, 22),
            basicSalary: 2000,
            status: EmployeeStatusDescription.Inactive,
            group: 'SALE',
            description: 'Description2',
            password: 'Password2',
        },
        {
            id: 3,
            username: 'janedoe',
            firstName: 'Jane',
            lastName: 'Doe',
            email: 'jane.doe@example.com',
            birthDate: new Date(1985, 10, 10),
            basicSalary: 3000,
            status: EmployeeStatusDescription.Active,
            group: 'DEVELOPER',
            description: 'Description3',
            password: 'Password3',
        },
        {
            id: 4,
            username: 'michaeljohnson',
            firstName: 'Michael',
            lastName: 'Johnson',
            email: 'michael.johnson@example.com',
            birthDate: new Date(1992, 4, 5),
            basicSalary: 4000,
            status: EmployeeStatusDescription.Inactive,
            group: 'ADMIN',
            description: 'Description4',
            password: 'Password4',
        },
        {
            id: 5,
            username: 'emilydavis',
            firstName: 'Emily',
            lastName: 'Davis',
            email: 'emily.davis@example.com',
            birthDate: new Date(1980, 2, 20),
            basicSalary: 5000,
            status: EmployeeStatusDescription.Active,
            group: 'ADMIN',
            description: 'Description5',
            password: 'Password5',
        },
        {
            id: 6,
            username: 'williamwilson',
            firstName: 'William',
            lastName: 'Wilson',
            email: 'william.wilson@example.com',
            birthDate: new Date(1975, 8, 15),
            basicSalary: 6000,
            status: EmployeeStatusDescription.Active,
            group: 'ADMIN',
            description: 'Description6',
            password: 'Password6',
        },
        {
            id: 7,
            username: 'olivertaylor',
            firstName: 'Oliver',
            lastName: 'Taylor',
            email: 'oliver.taylor@example.com',
            birthDate: new Date(1995, 6, 18),
            basicSalary: 7000,
            status: EmployeeStatusDescription.Active,
            group: 'ADMIN',
            description: 'Description7',
            password: 'Password7',
        },
        {
            id: 8,
            username: 'sophiamartin',
            firstName: 'Sophia',
            lastName: 'Martin',
            email: 'sophia.martin@example.com',
            birthDate: new Date(1988, 11, 30),
            basicSalary: 8000,
            status: EmployeeStatusDescription.Active,
            group: 'ADMIN',
            description: 'Description8',
            password: 'Password8',
        },
        {
            id: 9,
            username: 'jamesanderson',
            firstName: 'James',
            lastName: 'Anderson',
            email: 'james.anderson@example.com',
            birthDate: new Date(1991, 1, 12),
            basicSalary: 9000,
            status: EmployeeStatusDescription.Active,
            group: 'ADMIN',
            description: 'Description9',
            password: 'Password9',
        },
        {
            id: 10,
            username: 'amandathomas',
            firstName: 'Amanda',
            lastName: 'Thomas',
            email: 'amanda.thomas@example.com',
            birthDate: new Date(1983, 3, 25),
            basicSalary: 10000,
            status: EmployeeStatusDescription.Active,
            group: 'ADMIN',
            description: 'Description10',
            password: 'Password10',
        },
        {
            id: 11,
            username: 'davidmoore',
            firstName: 'David',
            lastName: 'Moore',
            email: 'david.moore@example.com',
            birthDate: new Date(1970, 5, 15),
            basicSalary: 11000,
            status: EmployeeStatusDescription.Inactive,
            group: 'ADMIN',
            description: 'Description11',
            password: 'Password11',
        },
        {
            id: 12,
            username: 'chrislee',
            firstName: 'Chris',
            lastName: 'Lee',
            email: 'chris.lee@example.com',
            birthDate: new Date(1986, 9, 27),
            basicSalary: 12000,
            status: EmployeeStatusDescription.Active,
            group: 'ADMIN',
            description: 'Description12',
            password: 'Password12',
        },
        {
            id: 13,
            username: 'jenniferwhite',
            firstName: 'Jennifer',
            lastName: 'White',
            email: 'jennifer.white@example.com',
            birthDate: new Date(1979, 7, 10),
            basicSalary: 13000,
            status: EmployeeStatusDescription.Inactive,
            group: 'ADMIN',
            description: 'Description13',
            password: 'Password13',
        },
        {
            id: 14,
            username: 'robertbrown',
            firstName: 'Robert',
            lastName: 'Brown',
            email: 'robert.brown@example.com',
            birthDate: new Date(1990, 4, 23),
            basicSalary: 14000,
            status: EmployeeStatusDescription.Active,
            group: 'ADMIN',
            description: 'Description14',
            password: 'Password14',
        },
        {
            id: 15,
            username: 'karenwalker',
            firstName: 'Karen',
            lastName: 'Walker',
            email: 'karen.walker@example.com',
            birthDate: new Date(1981, 2, 19),
            basicSalary: 15000,
            status: EmployeeStatusDescription.Active,
            group: 'ADMIN',
            description: 'Description15',
            password: 'Password15',
        },
        {
            id: 16,
            username: 'joshuahall',
            firstName: 'Joshua',
            lastName: 'Hall',
            email: 'joshua.hall@example.com',
            birthDate: new Date(1993, 3, 17),
            basicSalary: 16000,
            status: EmployeeStatusDescription.Inactive,
            group: 'ADMIN',
            description: 'Description16',
            password: 'Password16',
        },
        {
            id: 17,
            username: 'jessicaallen',
            firstName: 'Jessica',
            lastName: 'Allen',
            email: 'jessica.allen@example.com',
            birthDate: new Date(1982, 8, 24),
            basicSalary: 17000,
            status: EmployeeStatusDescription.Active,
            group: 'ADMIN',
            description: 'Description17',
            password: 'Password17',
        },
        {
            id: 18,
            username: 'danielscott',
            firstName: 'Daniel',
            lastName: 'Scott',
            email: 'daniel.scott@example.com',
            birthDate: new Date(1985, 5, 5),
            basicSalary: 18000,
            status: EmployeeStatusDescription.Inactive,
            group: 'ADMIN',
            description: 'Description18',
            password: 'Password18',
        },
        {
            id: 19,
            username: 'ashleyking',
            firstName: 'Ashley',
            lastName: 'King',
            email: 'ashley.king@example.com',
            birthDate: new Date(1996, 7, 29),
            basicSalary: 19000,
            status: EmployeeStatusDescription.Active,
            group: 'ADMIN',
            description: 'Description19',
            password: 'Password19',
        },
        {
            id: 20,
            username: 'matthewwright',
            firstName: 'Matthew',
            lastName: 'Wright',
            email: 'matthew.wright@example.com',
            birthDate: new Date(1978, 6, 6),
            basicSalary: 20000,
            status: EmployeeStatusDescription.Active,
            group: 'ADMIN',
            description: 'Description20',
            password: 'Password20',
        },
        {
            id: 22,
            username: 'gregoryrodriguez',
            firstName: 'Gregory',
            lastName: 'Rodriguez',
            email: 'gregory.rodriguez@example.com',
            birthDate: new Date(1987, 11, 12),
            basicSalary: 22000,
            status: EmployeeStatusDescription.Active,
            group: 'ADMIN',
            description: 'Description22',
            password: 'Password22',
        },
        {
            id: 23,
            username: 'melissamitchell',
            firstName: 'Melissa',
            lastName: 'Mitchell',
            email: 'melissa.mitchell@example.com',
            birthDate: new Date(1984, 4, 27),
            basicSalary: 23000,
            status: EmployeeStatusDescription.Inactive,
            group: 'ADMIN',
            description: 'Description23',
            password: 'Password23',
        },
        {
            id: 24,
            username: 'charleslopez',
            firstName: 'Charles',
            lastName: 'Lopez',
            email: 'charles.lopez@example.com',
            birthDate: new Date(1991, 8, 8),
            basicSalary: 24000,
            status: EmployeeStatusDescription.Active,
            group: 'ADMIN',
            description: 'Description24',
            password: 'Password24',
        },
        {
            id: 25,
            username: 'victoriaedwards',
            firstName: 'Victoria',
            lastName: 'Edwards',
            email: 'victoria.edwards@example.com',
            birthDate: new Date(1983, 2, 14),
            basicSalary: 25000,
            status: EmployeeStatusDescription.Active,
            group: 'ADMIN',
            description: 'Description25',
            password: 'Password25',
        },
        {
            id: 26,
            username: 'kevinmartin',
            firstName: 'Kevin',
            lastName: 'Martin',
            email: 'kevin.martin@example.com',
            birthDate: new Date(1980, 10, 30),
            basicSalary: 26000,
            status: EmployeeStatusDescription.Active,
            group: 'ADMIN',
            description: 'Description26',
            password: 'Password26',
        },
        {
            id: 27,
            username: 'amandahernandez',
            firstName: 'Amanda',
            lastName: 'Hernandez',
            email: 'amanda.hernandez@example.com',
            birthDate: new Date(1994, 6, 9),
            basicSalary: 27000,
            status: EmployeeStatusDescription.Inactive,
            group: 'ADMIN',
            description: 'Description27',
            password: 'Password27',
        },
        {
            id: 28,
            username: 'richardyoung',
            firstName: 'Richard',
            lastName: 'Young',
            email: 'richard.young@example.com',
            birthDate: new Date(1986, 3, 18),
            basicSalary: 28000,
            status: EmployeeStatusDescription.Active,
            group: 'ADMIN',
            description: 'Description28',
            password: 'Password28',
        },
        {
            id: 29,
            username: 'jessicawalker',
            firstName: 'Jessica',
            lastName: 'Walker',
            email: 'jessica.walker@example.com',
            birthDate: new Date(1993, 9, 5),
            basicSalary: 29000,
            status: EmployeeStatusDescription.Active,
            group: 'ADMIN',
            description: 'Description29',
            password: 'Password29',
        },
        {
            id: 30,
            username: 'jonathansanchez',
            firstName: 'Jonathan',
            lastName: 'Sanchez',
            email: 'jonathan.sanchez@example.com',
            birthDate: new Date(1989, 1, 28),
            basicSalary: 30000,
            status: EmployeeStatusDescription.Inactive,
            group: 'ADMIN',
            description: 'Description30',
            password: 'Password30',
        },
        {
            id: 31,
            username: 'lisawright',
            firstName: 'Lisa',
            lastName: 'Wright',
            email: 'lisa.wright@example.com',
            birthDate: new Date(1981, 7, 14),
            basicSalary: 31000,
            status: EmployeeStatusDescription.Active,
            group: 'ADMIN',
            description: 'Description31',
            password: 'Password31',
        },
        {
            id: 32,
            username: 'brianroberts',
            firstName: 'Brian',
            lastName: 'Roberts',
            email: 'brian.roberts@example.com',
            birthDate: new Date(1984, 11, 3),
            basicSalary: 32000,
            status: EmployeeStatusDescription.Active,
            group: 'ADMIN',
            description: 'Description32',
            password: 'Password32',
        },
        {
            id: 33,
            username: 'monicagarcia',
            firstName: 'Monica',
            lastName: 'Garcia',
            email: 'monica.garcia@example.com',
            birthDate: new Date(1982, 5, 19),
            basicSalary: 33000,
            status: EmployeeStatusDescription.Active,
            group: 'ADMIN',
            description: 'Description33',
            password: 'Password33',
        },
        {
            id: 34,
            username: 'douglashall',
            firstName: 'Douglas',
            lastName: 'Hall',
            email: 'douglas.hall@example.com',
            birthDate: new Date(1978, 8, 22),
            basicSalary: 34000,
            status: EmployeeStatusDescription.Inactive,
            group: 'ADMIN',
            description: 'Description34',
            password: 'Password34',
        },
        {
            id: 35,
            username: 'lauramiller',
            firstName: 'Laura',
            lastName: 'Miller',
            email: 'laura.miller@example.com',
            birthDate: new Date(1990, 3, 11),
            basicSalary: 35000,
            status: EmployeeStatusDescription.Active,
            group: 'ADMIN',
            description: 'Description35',
            password: 'Password35',
        },
        {
            id: 36,
            username: 'erichernandez',
            firstName: 'Eric',
            lastName: 'Hernandez',
            email: 'eric.hernandez@example.com',
            birthDate: new Date(1976, 6, 6),
            basicSalary: 36000,
            status: EmployeeStatusDescription.Active,
            group: 'ADMIN',
            description: 'Description36',
            password: 'Password36',
        },
        {
            id: 37,
            username: 'ashleymartinez',
            firstName: 'Ashley',
            lastName: 'Martinez',
            email: 'ashley.martinez@example.com',
            birthDate: new Date(1987, 10, 5),
            basicSalary: 37000,
            status: EmployeeStatusDescription.Active,
            group: 'ADMIN',
            description: 'Description37',
            password: 'Password37',
        },
        {
            id: 38,
            username: 'adamsullivan',
            firstName: 'Adam',
            lastName: 'Sullivan',
            email: 'adam.sullivan@example.com',
            birthDate: new Date(1983, 2, 28),
            basicSalary: 38000,
            status: EmployeeStatusDescription.Inactive,
            group: 'ADMIN',
            description: 'Description38',
            password: 'Password38',
        },
        {
            id: 39,
            username: 'christophergreen',
            firstName: 'Christopher',
            lastName: 'Green',
            email: 'christopher.green@example.com',
            birthDate: new Date(1991, 4, 17),
            basicSalary: 39000,
            status: EmployeeStatusDescription.Active,
            group: 'ADMIN',
            description: 'Description39',
            password: 'Password39',
        },
        {
            id: 40,
            username: 'jessicalopez',
            firstName: 'Jessica',
            lastName: 'Lopez',
            email: 'jessica.lopez@example.com',
            birthDate: new Date(1985, 8, 30),
            basicSalary: 40000,
            status: EmployeeStatusDescription.Active,
            group: 'ADMIN',
            description: 'Description40',
            password: 'Password40',
        },
    ]

    getListStatus(): EmployeeStatus[] {
        return this.listStatus;
    }


    getListEmployeeGroup(): EmployeeGroup[] {
        return this.listGroup;
    }

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
        this.employees.unshift(employee);
        console.log('Employee added successfully');
    }
}