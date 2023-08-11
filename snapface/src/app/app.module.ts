import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { AuthInterceptor } from './interceptor/auth.interceptor';
// import { AuthService } from './core/services/auth.service';
import { CoreModule } from './core/core.module';
import { LandingPageModule } from './landing-page/components/landing-page/landing-page.module';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule, 
    LandingPageModule,
    AuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}