import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WaiterComponent } from './components/waiter/waiter.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { LunchComponent } from './components/lunch/lunch.component';


const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', component: WelcomeComponent },
  { path: 'waiter', component: WaiterComponent },
  { path: 'kitchen', component: KitchenComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing:false }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
