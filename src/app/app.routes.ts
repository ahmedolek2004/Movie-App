import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { VideoComponent } from "./pages/video/video.component";
import { UploadComponent } from "./pages/upload/upload.component";
import { AboutComponent } from "./pages/about/about.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { ContactComponent } from "./pages/contact/contact.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "video/:id", component: VideoComponent },
  { path: "upload", component: UploadComponent },
  { path: "about", component: AboutComponent },
  { path: "profile", component: ProfileComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "contact", component: ContactComponent },
  { path: "**", redirectTo: "" },
];
