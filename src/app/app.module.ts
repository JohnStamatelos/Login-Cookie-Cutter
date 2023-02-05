import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    MatPasswordStrengthModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
})
export class AppModule {}
