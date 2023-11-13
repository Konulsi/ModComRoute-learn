import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    //lazy loading uchun bele edirik/ yeni  sehife achilan kimi modulelarin hamsi yuklenmesin deye. hansi route e kechid edilse o gelsin.
    path: 'placeholders',
    loadChildren: () =>
      import('./placeholders/placeholders.module').then(
        (m) => m.PlaceholdersModule
      ),
  },
  {
    path: 'tables',
    loadChildren: () =>
      import('./tables/tables.module').then((m) => m.TablesModule),
  },
  {
    path: 'lists',
    loadChildren: () =>
      import('./lists/lists.module').then((m) => m.ListsModule),
  },
  {
    path: 'popups',
    loadChildren: () =>
      import('./popups//popups.module').then((m) => m.PopupsModule),
  },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
