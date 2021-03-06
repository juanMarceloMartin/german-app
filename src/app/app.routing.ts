import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { NounsComponent } from './components/nouns/nouns.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { VerbsComponent } from './components/verbs/verbs.component';

export const appRoutes: Routes = [
    {
        path: 'nouns', component: NounsComponent,
    },
    {
        path: 'verbs', component: VerbsComponent
    },
    {
        path: 'search-result', component: SearchResultComponent
    },
    {
        path: '',
        component: LandingComponent
    }
];
