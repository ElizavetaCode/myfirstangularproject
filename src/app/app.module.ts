import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { KontaktiComponent } from './components/kontakti/kontakti.component';
import { LkComponent } from './components/lk/lk.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ReactiveFormsModule } from '@angular/forms';

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
    ProductListComponent
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
