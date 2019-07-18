import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WaiterComponent } from './components/waiter/waiter.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';


const routes: Routes = [
  { path: 'waiter', component: WaiterComponent },
  { path: 'kitchen', component: KitchenComponent },
  { path: '', component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
