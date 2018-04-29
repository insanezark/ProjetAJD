import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';


import { HomeComponent} from './Home/home.component';
import { ContactComponent } from './Contact/contact.component';
import { AchatComponent } from './Achat/achat.component';
import { VenteComponent } from './Vente/vente.component';
import { QuiComponent } from './Qui/qui.component';




const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'vente', component: VenteComponent},
  {path: 'achat', component: AchatComponent},
  {path: 'qui', component: QuiComponent},

]

@NgModule({
  imports: [CommonModule],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

  declarations: []
})
export class AppRoutingModule { }
