import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { WaiterComponent } from './components/waiter/waiter.component';
import { HeaderComponent } from './components/header/header.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { MainComponent } from './components/main/main.component';
import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { LunchComponent } from './components/lunch/lunch.component';
import { AggregatesComponent } from './components/aggregates/aggregates.component';
import { OrderComponent } from './components/order/order.component';
import { ClientComponent } from './components/client/client.component';
import { SendService } from './services/send.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    WaiterComponent,
    HeaderComponent,
    KitchenComponent,
    MainComponent,
    BreakfastComponent,
    LunchComponent,
    AggregatesComponent,
    OrderComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    SendService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
