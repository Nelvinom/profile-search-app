import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from '../app/profile-service/profile.service';
import { from } from 'rxjs';
import { NavbarComponent } from '../app/about/navbar/navbar.component';
import { DateCountPipe } from './date-count.pipe';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { AboutComponent } from './about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavbarComponent,
    DateCountPipe,
    ProfileDetailComponent,
    AboutComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
