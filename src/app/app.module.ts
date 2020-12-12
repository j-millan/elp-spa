import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MembersComponent } from './components/members/members.component';

import { MembersService } from './services/members.service';

import { APP_ROUTING } from './app.routing';
import { MemberComponent } from './components/member/member.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { MemberCardComponent } from './components/member-card/member-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    MembersComponent,
    MemberComponent,
    SearchResultsComponent,
    MemberCardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    MembersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
