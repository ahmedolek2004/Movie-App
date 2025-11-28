import { Component, Inject, OnInit } from "@angular/core";
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { CommonModule, DOCUMENT } from "@angular/common";
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
            <!-- Theme Toggle -->
            <button
              (click)="toggleTheme()"
              class="ml-2 flex items-center justify-center w-10 h-10 rounded-full bg-white text-red-600 hover:opacity-90"
              [attr.aria-pressed]="isDark"
              aria-label="Toggle dark mode"
            >
              <svg
                *ngIf="!isDark"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-yellow-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M10 2a.75.75 0 01.75.75V4a.75.75 0 01-1.5 0V2.75A.75.75 0 0110 2zM10 16a.75.75 0 01.75.75V18a.75.75 0 01-1.5 0v-1.25A.75.75 0 0110 16zM4.22 4.22a.75.75 0 011.06 0l.88.88a.75.75 0 11-1.06 1.06l-.88-.88a.75.75 0 010-1.06zM13.84 13.84a.75.75 0 011.06 0l.88.88a.75.75 0 11-1.06 1.06l-.88-.88a.75.75 0 010-1.06zM2 10a.75.75 0 01.75-.75H4a.75.75 0 010 1.5H2.75A.75.75 0 012 10zM16 10a.75.75 0 01.75-.75H18a.75.75 0 010 1.5h-1.25A.75.75 0 0116 10zM4.22 15.78a.75.75 0 010-1.06l.88-.88a.75.75 0 111.06 1.06l-.88.88a.75.75 0 01-1.06 0zM13.84 6.16a.75.75 0 010-1.06l.88-.88a.75.75 0 111.06 1.06l-.88.88a.75.75 0 01-1.06 0zM10 6.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"
                />
              </svg>
              <svg
                *ngIf="isDark"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-800"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M17.293 13.293A8 8 0 116.707 2.707 6 6 0 1017.293 13.293z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [],
})
export class NavbarComponent implements OnInit {
  searchQuery = "";
  isDark = false;

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    const stored = localStorage.getItem("theme");
    if (stored) {
      this.isDark = stored === "dark";
    } else {
      // default to system preference
      this.isDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    this.applyTheme();
  }

  onSearch() {
    if (this.searchQuery.trim()) {
      // Navigate to home with search query
      this.router.navigate(["/"], {
        queryParams: { search: this.searchQuery },
      });
    }
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    localStorage.setItem("theme", this.isDark ? "dark" : "light");
    this.applyTheme();
  }

  private applyTheme() {
    const root = this.document.documentElement;
    if (this.isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }
}
