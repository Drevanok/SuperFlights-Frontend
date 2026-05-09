import { Component, signal } from "@angular/core";
import { AuthService, LoginDto } from "../../services/auth.service";
import { Router, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-login',
    imports: [FormsModule, RouterModule],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'], 
})
 
export class LoginComponent {
    username = signal<string>('');
    password = signal<string>('');

    errorMessage = signal<string>('');
    loading = signal<boolean>(true);

    constructor(private authService: AuthService, private router: Router) {}

    login(): void {
        this.loading.set(true);

        const loginDto: LoginDto = {username: this.username(), password: this.password()};
        
        this.authService.login(loginDto).subscribe({
            next: (response) => {
                this.authService.setToken(response.access_token);
                this.router.navigate(['/flights']); // flights page after login
                this.loading.set(false);
                console.log('inicio de sesion')
            },

            error: (err) => {
                this.errorMessage.set(err.error?.message || 'Credentials are incorrect');
                this.loading.set(false);
            }
        })
    }
}