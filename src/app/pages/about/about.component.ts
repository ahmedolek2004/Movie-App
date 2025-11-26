import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="container mx-auto px-4 py-12">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-800">About MiniTube</h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          A modern video platform designed for learning, sharing, and discovering amazing content.
        </p>
      </div>

      <section class="mb-12">
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <h2 class="text-3xl font-bold mb-4 text-gray-800">Our Mission</h2>
          <p class="text-gray-700 text-lg leading-relaxed mb-4">
            At MiniTube, our mission is to provide a simple, accessible, and user-friendly platform 
            for video content creators and viewers. We believe that everyone should have the ability 
            to share their knowledge, creativity, and stories with the world.
          </p>
          <p class="text-gray-700 text-lg leading-relaxed">
            We are committed to creating an inclusive community where learning and entertainment 
            go hand in hand, fostering creativity and innovation in the digital space.
          </p>
        </div>
      </section>

      <section class="mb-12">
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <h2 class="text-3xl font-bold mb-4 text-gray-800">Our Vision</h2>
          <p class="text-gray-700 text-lg leading-relaxed mb-4">
            We envision MiniTube as the go-to platform for educational content, creative expression, 
            and community engagement. Our goal is to make video sharing as simple and intuitive as 
            possible, removing barriers that prevent people from sharing their content.
          </p>
          <p class="text-gray-700 text-lg leading-relaxed">
            Through continuous innovation and user-focused design, we aim to build a platform that 
            empowers creators and enriches the viewing experience for millions of users worldwide.
          </p>
        </div>
      </section>

      <section class="mb-12">
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <h2 class="text-3xl font-bold mb-4 text-gray-800">Platform Overview</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h3 class="text-xl font-semibold mb-2 text-gray-800">For Viewers</h3>
              <ul class="list-disc list-inside text-gray-700 space-y-2">
                <li>Browse and discover trending videos</li>
                <li>Search through our extensive video library</li>
                <li>Watch high-quality video content</li>
                <li>Engage with comments and likes</li>
                <li>Create personalized playlists</li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-gray-800">For Creators</h3>
              <ul class="list-disc list-inside text-gray-700 space-y-2">
                <li>Easy video upload process</li>
                <li>Custom thumbnails and descriptions</li>
                <li>Real-time analytics and insights</li>
                <li>Community engagement tools</li>
                <li>Monetization opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-12">
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <h2 class="text-3xl font-bold mb-6 text-gray-800 text-center">Meet the Team</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span class="text-4xl">👨‍💻</span>
              </div>
              <h3 class="text-xl font-semibold mb-2 text-gray-800">Ahmed Abdelhalim</h3>
              <p class="text-gray-600">Lead Developer</p>
              <p class="text-sm text-gray-500 mt-2">
                Passionate about creating amazing user experiences and building scalable web applications.
              </p>
            </div>
            <div class="text-center">
              <div class="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span class="text-4xl">🎨</span>
              </div>
              <h3 class="text-xl font-semibold mb-2 text-gray-800">Design Team</h3>
              <p class="text-gray-600">UI/UX Designers</p>
              <p class="text-sm text-gray-500 mt-2">
                Dedicated to creating beautiful, intuitive interfaces that users love.
              </p>
            </div>
            <div class="text-center">
              <div class="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span class="text-4xl">🚀</span>
              </div>
              <h3 class="text-xl font-semibold mb-2 text-gray-800">Product Team</h3>
              <p class="text-gray-600">Product Managers</p>
              <p class="text-sm text-gray-500 mt-2">
                Focused on delivering features that matter most to our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <h2 class="text-3xl font-bold mb-4 text-gray-800 text-center">Contact Us</h2>
          <div class="text-center text-gray-700">
            <p class="mb-2">Have questions or feedback? We'd love to hear from you!</p>
            <p class="mb-4">Email: <a href="mailto:contact&#64;mintube.com" class="text-red-600 hover:underline">contact&#64;mintube.com</a></p>
            <p>Follow us on social media for updates and announcements.</p>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: []
})
export class AboutComponent {}

