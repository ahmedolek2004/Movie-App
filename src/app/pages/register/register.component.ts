import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-register",
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div
      class="min-h-[calc(100vh-200px)] flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 px-4"
    >
      <div class="w-full max-w-md">
        <div class="bg-white rounded-lg shadow-xl p-8">
          <h1 class="text-3xl font-bold text-center text-gray-800 mb-8">
            Register
          </h1>

          <form (ngSubmit)="onRegister()" class="space-y-6">
            <!-- Full Name -->
            <div>
              <label
                for="fullName"
                class="block text-sm font-medium text-gray-700 mb-2"
                >Full Name</label
              >
              <input
                id="fullName"
                type="text"
                [(ngModel)]="registerData.fullName"
                name="fullName"
                required
                placeholder="Enter your full name"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
              />
            </div>

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
                [(ngModel)]="registerData.email"
                name="email"
                required
                placeholder="Enter your email"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
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
                [(ngModel)]="registerData.password"
                name="password"
                required
                placeholder="Create a password"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
              />
            </div>

            <!-- Confirm Password -->
            <div>
              <label
                for="confirmPassword"
                class="block text-sm font-medium text-gray-700 mb-2"
                >Confirm Password</label
              >
              <input
                id="confirmPassword"
                type="password"
                [(ngModel)]="registerData.confirmPassword"
                name="confirmPassword"
                required
                placeholder="Confirm your password"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
              />
            </div>

            <!-- Terms Agreement -->
            <div class="flex items-center">
              <input
                id="terms"
                type="checkbox"
                [(ngModel)]="registerData.agreeToTerms"
                name="agreeToTerms"
                required
                class="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-2 focus:ring-green-500"
              />
              <label for="terms" class="ml-2 text-sm text-gray-700">
                I agree to the
                <a
                  href="#"
                  class="text-green-600 hover:text-green-700 font-semibold"
                  >terms and conditions</a
                >
              </label>
            </div>

            <!-- Register Button -->
            <button
              type="submit"
              class="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
            >
              Register
            </button>
          </form>

          <!-- Divider -->
          <div class="mt-6 flex items-center">
            <div class="flex-1 border-t border-gray-300"></div>
            <div class="px-2 text-gray-500 text-sm">or</div>
            <div class="flex-1 border-t border-gray-300"></div>
          </div>

          <!-- Login Link -->
          <p class="mt-6 text-center text-gray-600">
            Already have an account?
            <a
              routerLink="/login"
              class="text-green-600 hover:text-green-700 font-semibold"
              >Login here</a
            >
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class RegisterComponent {
  registerData = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  };

  onRegister() {
    if (this.registerData.password !== this.registerData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!this.registerData.agreeToTerms) {
      alert("You must agree to the terms and conditions");
      return;
    }
    console.log("Registration attempted with:", {
      fullName: this.registerData.fullName,
      email: this.registerData.email,
      agreeToTerms: this.registerData.agreeToTerms,
    });
    alert("Registration functionality to be implemented");
  }
}
