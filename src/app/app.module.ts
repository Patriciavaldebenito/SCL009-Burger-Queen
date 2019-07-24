import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
//servicios


//import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
//import { environment } from 'src/environments/environment';

import { FormsModule } from '@angular/forms';
import { BtnMainBreakfastOrLunchComponent } from './components/main/btn-main-breakfast-or-lunch/btn-main-breakfast-or-lunch.component'; // <-- NgModel lives here

  
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
    ClientComponent,
    BtnMainBreakfastOrLunchComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   // AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    NgbModule

  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
