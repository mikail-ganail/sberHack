import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { JayjestComponent } from './jayjest/jayjest.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    title: 'main'
  },
  {
    path: 'jayjest',
    component: JayjestComponent,
    title: 'Дайджест'
  },
  {
    path: '**',
    component: MainComponent,
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
