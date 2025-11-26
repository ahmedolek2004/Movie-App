import { Component } from "@angular/core";
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, FormsModule],
  template: `
    <nav class="bg-red-600 text-white shadow-lg">
      <div class="container mx-auto px-4 py-3">
        <div class="flex items-center justify-between flex-wrap gap-4">
          <div class="flex items-center space-x-4">
            <a routerLink="/" class="text-2xl font-bold">MiniTube</a>
          </div>
          <div class="flex-1 max-w-2xl mx-4 min-w-0">
            <div class="relative">
              <input
                type="text"
                [(ngModel)]="searchQuery"
                (keyup.enter)="onSearch()"
                placeholder="Search videos..."
                class="w-full px-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                (click)="onSearch()"
                class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 px-4 py-1 rounded-full text-gray-800"
              >
                Search
              </button>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <a
              routerLink="/upload"
              routerLinkActive="text-gray-200"
              class="hover:text-gray-200"
              >Upload</a
            >
            <a
              routerLink="/profile"
              routerLinkActive="text-gray-200"
              class="hover:text-gray-200"
              >Profile</a
            >
            <a
              routerLink="/about"
              routerLinkActive="text-gray-200"
              class="hover:text-gray-200"
              >About</a
            >
            <a
              routerLink="/contact"
              routerLinkActive="text-gray-200"
              class="hover:text-gray-200"
              >Contact</a
            >
            <a
              routerLink="/login"
              routerLinkActive="text-gray-200"
              class="hover:text-gray-200"
              >Login</a
            >
            <a
              routerLink="/register"
              routerLinkActive="text-gray-200"
              class="bg-white text-red-600 px-3 py-1 rounded hover:bg-gray-100 font-semibold"
              >Register</a
            >
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [],
})
export class NavbarComponent {
  searchQuery = "";

  constructor(private router: Router) {}

  onSearch() {
    if (this.searchQuery.trim()) {
      // Navigate to home with search query
      this.router.navigate(["/"], {
        queryParams: { search: this.searchQuery },
      });
    }
  }
}
