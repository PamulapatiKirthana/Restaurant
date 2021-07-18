import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { OrderonlineComponent } from './orderonline/orderonline.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"menu",component:MenuComponent},
  {path:"orderonline",component:OrderonlineComponent},
  {path:"contactus",component:ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
