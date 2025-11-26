import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div
      class="min-h-[calc(100vh-200px)] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4"
    >
      <div class="w-full max-w-md">
        <div class="bg-white rounded-lg shadow-xl p-8">
          <h1 class="text-3xl font-bold text-center text-gray-800 mb-8">
            Login
          </h1>

          <form (ngSubmit)="onLogin()" class="space-y-6">
            <!-- Email -->
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700 mb-2"
                >Email Address</label
              >
              <input
                id="email"
                type="email"
                [(ngModel)]="loginData.email"
                name="email"
                required
                placeholder="Enter your email"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
              />
            </div>

            <!-- Password -->
            <div>
              <label
                for="password"
                class="block text-sm font-medium text-gray-700 mb-2"
                >Password</label
              >
              <input
                id="password"
                type="password"
                [(ngModel)]="loginData.password"
                name="password"
                required
                placeholder="Enter your password"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
              />
            </div>

            <!-- Remember Me -->
            <div class="flex items-center">
              <input
                id="rememberMe"
                type="checkbox"
                [(ngModel)]="loginData.rememberMe"
                name="rememberMe"
                class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-2 focus:ring-indigo-500"
              />
              <label for="rememberMe" class="ml-2 text-sm text-gray-700"
                >Remember me</label
              >
            </div>

            <!-- Login Button -->
            <button
              type="submit"
              class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
            >
              Login
            </button>
          </form>

          <!-- Divider -->
          <div class="mt-6 flex items-center">
            <div class="flex-1 border-t border-gray-300"></div>
            <div class="px-2 text-gray-500 text-sm">or</div>
            <div class="flex-1 border-t border-gray-300"></div>
          </div>

          <!-- Register Link -->
          <p class="mt-6 text-center text-gray-600">
            Don't have an account?
            <a
              routerLink="/register"
              class="text-indigo-600 hover:text-indigo-700 font-semibold"
              >Register here</a
            >
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class LoginComponent {
  loginData = {
    email: "",
    password: "",
    rememberMe: false,
  };

  onLogin() {
    console.log("Login attempted with:", this.loginData);
    alert("Login functionality to be implemented");
  }
}
