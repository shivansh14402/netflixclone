import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroungImageComponent } from './backgroung-image/backgroung-image.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './pages/signin/signin.component';

import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

const rootRoutes: Routes = [
  {path: "", component: LoginComponent},
  {path: "login", component: SigninComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    BackgroungImageComponent,
    LoginComponent,
    HeaderComponent,
    SigninComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rootRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
