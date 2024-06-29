import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private isLoggedIn = false;

    login(username: string, password: string): boolean {
        // Logika login Anda (misalnya verifikasi username dan password)
        console.log(username, password);
        if (username === 'admin' && password === 'admin') {
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