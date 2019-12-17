import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TipologiaConcorsoComponent} from './componenets/tipologia-concorso/tipologia-concorso.component';
import {FaqComponent} from './componenets/faq/faq.component';

const routes: Routes = [
  {
    path: '',
    component: TipologiaConcorsoComponent,
  },
  {
    path: 'faq',
    component: FaqComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
