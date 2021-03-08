import { NotesService } from './service/notes.service';
import { LoadingSpinnerComponent } from './shared/loading-spinner.component';
import { HttpClient, HttpClientModule} from '@angular/common/http';



import { StComponent } from './st/st.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsComponent } from './news/news.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { GeneralComponent } from './general/general.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewComponent,

    NavbarComponent,
    StComponent,
    NewsComponent,
    EntertainmentComponent,
    GeneralComponent,
    AdminComponent,
    LoginComponent,
    LogoutComponent,
    NotfoundComponent,
    SignupComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'new', component: NewComponent},
      {path: 'st', component: StComponent},
      {path: 'news', component: NewsComponent},
      {path: 'entertainment', component: EntertainmentComponent},
      {path: 'general', component: GeneralComponent},
      {path: 'admin', component: AdminComponent},
      {path: 'login', component: LoginComponent},
      {path: 'logout', component: LogoutComponent},
      {path: 'signup', component: SignupComponent},
      {path: '**', component: NotfoundComponent},
    ])
  ],
  providers: [
NotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
