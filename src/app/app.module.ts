import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { KontaktiComponent } from './components/kontakti/kontakti.component';
import { LkComponent } from './components/lk/lk.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductAlertsComponent } from './components/product-alert/product-alert.component';


const appRoutes: Routes = [
  {path: '', component:CarComponent},
  {path: 'about', component:KontaktiComponent},
  {path: 'lk', component:LkComponent},
  {path: 'product-list', component:ProductListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    KontaktiComponent,
    LkComponent,
    ProductListComponent,
    ProductAlertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
