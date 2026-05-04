import { Component } from "@angular/core";
import { AuthService, LoginDto } from "../../services/auth.service";
import { Router, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [FormsModule, CommonModule, RouterModule],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    username = '';
    password = ''
    errorMessage = '';

    constructor(private authService: AuthService, private router: Router) {}

    login(): void {
        const loginDto: LoginDto = {username: this.username, password: this.password};
        this.authService.login(loginDto).subscribe({
            next: (response) => {
                this.authService.setToken(response.access_token);
                this.router.navigate(['/flights']); // flights page after login
                console.log('inicio de sesion')
            },

            error: (err) => {
                this.errorMessage = err.error?.message || 'Login failed. Please check your credentials and try again.';
            }
        })
    }
}