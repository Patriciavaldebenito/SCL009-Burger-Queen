import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { WaiterComponent } from './components/waiter/waiter.component';
import { HeaderComponent } from './components/header/header.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { MainComponent } from './components/main/main.component';
import { ClientComponent } from './components/client/client.component';
//servicios
//import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
//import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { InformationOrderService } from './services/information-order.service';
import { TemplateClientComponent } from './components/template-client/template-client.component';
  
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    WaiterComponent,
    HeaderComponent,
    KitchenComponent,
    MainComponent,
    ClientComponent,
    TemplateClientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   // AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule

  ],
  providers: [
    
    InformationOrderService
    
  ],
  bootstrap: [AppComponent],
  entryComponents: [TemplateClientComponent]
})
export class AppModule { }
