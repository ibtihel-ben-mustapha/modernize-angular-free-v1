import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './BackOffice/layouts/blank/blank.component';
import { FullComponent } from './BackOffice/layouts/full/full.component';
import { FrontOfficeComponent } from './front-office/front-office.component';
import { AppCommunComponent } from './app-commun.component';

const routes: Routes = [


  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./BackOffice/pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'ui-components',
        loadChildren: () =>
          import('./BackOffice/pages/ui-components/ui-components.module').then(
            (m) => m.UicomponentsModule
          ),
      },
      {
        path: 'extra',
        loadChildren: () =>
          import('./BackOffice/pages/extra/extra.module').then((m) => m.ExtraModule),
      },
    ],
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./BackOffice/pages/authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },
  
  { path: 'choix', component: AppCommunComponent },
  { path: 'front', component: FrontOfficeComponent },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
