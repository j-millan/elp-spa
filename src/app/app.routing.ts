import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { MemberComponent } from './components/member/member.component';
import { MembersComponent } from './components/members/members.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'members', component: MembersComponent },
    { path: 'about', component: AboutComponent },
    { path: 'member/:id', component: MemberComponent },
    { path: 'search/:query', component: SearchResultsComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);