// export enum EmployeeStatus {
//     Active = 'Active',
//     Inactive = 'Inactive',
// }

export enum EmployeeStatusName {
    Active = 'Active',
    Inactive = 'Inactive',
}

export enum EmployeeStatusDescription {
    Active = 'Active',
    Inactive = 'Inactive',
}


export enum EmployeeGroupName {
    DEVELOPER = 'Developer',
    HR = 'Human Resources',
    SALE = 'Sale',
    MARKETING = 'Marketing',
    ADMIN = 'Admin',
    ACCOUNTANT = 'Accountant',
    STAFF = 'Staff',
    PROJECT_MANAGER = 'Project Manager',
    MANAGER = 'Manager',
    DIRECTOR = 'Director',
}

export enum EmployeeGroupDescription {
    DEVELOPER = 'DEVELOPER',
    HR = 'HR',
    SALE = 'SALE',
    MARKETING = 'MARKETING',
    ADMIN = 'ADMIN',
    ACCOUNTANT = 'ACCOUNTANT',
    STAFF = 'STAFF',
    PROJECT_MANAGER = 'PROJECT_MANAGER',
    MANAGER = 'MANAGER',
    DIRECTOR = 'DIRECTOR',
}


export interface EmployeeStatus {
    name: EmployeeStatusName;
    description: EmployeeStatusDescription;
}

export interface Employee {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    birthDate: Date;
    basicSalary: number;
    status: EmployeeStatusDescription;
    group: string;
    description: string;
    password: string;
}

export interface EmployeeGroup {
    name: string;
    description: string;
}