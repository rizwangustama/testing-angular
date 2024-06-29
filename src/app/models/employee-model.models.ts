export enum EmployeeStatus {
    Active = 'Active',
    Inactive = 'Inactive',
}

export interface Employee {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    birthDate: Date;
    basicSalary: number;
    status: EmployeeStatus;
    group: string;
    description: string;
    password: string;
}