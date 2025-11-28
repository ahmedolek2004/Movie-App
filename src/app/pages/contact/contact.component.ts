import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div
      class="min-h-[calc(100vh-200px)] bg-gradient-to-br from-purple-50 to-pink-100 py-12 px-4"
    >
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p class="text-lg text-gray-600">
            We'd love to hear from you. Send us a message!
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Contact Information Cards -->
          <div class="lg:col-span-1 space-y-6">
            <!-- Email Card -->
            <div class="bg-white rounded-lg shadow-lg p-6">
              <div class="flex items-center mb-4">
                <div
                  class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center"
                >
                  <svg
                    class="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-800 ml-4">Email</h3>
              </div>
              <p class="text-gray-600">info&#64;movielibrary.com</p>
              <p class="text-gray-600">support&#64;movielibrary.com</p>
            </div>

            <!-- Phone Card -->
            <div class="bg-white rounded-lg shadow-lg p-6">
              <div class="flex items-center mb-4">
                <div
                  class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center"
                >
                  <svg
                    class="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-800 ml-4">Phone</h3>
              </div>
              <p class="text-gray-600">+1 (555) 123-4567</p>
              <p class="text-gray-600">+1 (555) 987-6543</p>
            </div>

            <!-- Location Card -->
            <div class="bg-white rounded-lg shadow-lg p-6">
              <div class="flex items-center mb-4">
                <div
                  class="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center"
                >
                  <svg
                    class="w-6 h-6 text-pink-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-800 ml-4">
                  Location
                </h3>
              </div>
              <p class="text-gray-600">123 Movie Street</p>
              <p class="text-gray-600">Hollywood, CA 90001</p>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="lg:col-span-2 bg-white rounded-lg shadow-lg p-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">
              Send us a Message
            </h2>
            <form (ngSubmit)="onSubmit()" class="space-y-6">
              <!-- Name -->
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-700 mb-2"
                  >Full Name</label
                >
                <input
                  id="name"
                  type="text"
                  [(ngModel)]="formData.name"
                  name="name"
                  required
                  placeholder="Your name"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
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
                  [(ngModel)]="formData.email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                />
              </div>

              <!-- Subject -->
              <div>
                <label
                  for="subject"
                  class="block text-sm font-medium text-gray-700 mb-2"
                  >Subject</label
                >
                <input
                  id="subject"
                  type="text"
                  [(ngModel)]="formData.subject"
                  name="subject"
                  required
                  placeholder="What is this about?"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                />
              </div>

              <!-- Message -->
              <div>
                <label
                  for="message"
                  class="block text-sm font-medium text-gray-700 mb-2"
                  >Message</label
                >
                <textarea
                  id="message"
                  [(ngModel)]="formData.message"
                  name="message"
                  required
                  rows="6"
                  placeholder="Type your message here..."
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition resize-none"
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                class="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
              >
                Send Message
              </button>
            </form>

            <!-- Success Message -->
            <div
              *ngIf="submitSuccess"
              class="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
            >
              Thank you! Your message has been sent successfully. We'll get back
              to you soon.
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class ContactComponent {
  formData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  submitSuccess = false;

  onSubmit() {
    console.log("Contact form submitted:", this.formData);
    this.submitSuccess = true;
    this.resetForm();
    setTimeout(() => {
      this.submitSuccess = false;
    }, 5000);
  }

  resetForm() {
    this.formData = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  }
}
