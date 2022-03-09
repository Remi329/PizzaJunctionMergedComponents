import { FooterComponent } from './footer/app.footer.component';
import { PizzaComponent } from './pizza/pizza.component';
import { DiscountComponent } from './discount/discount.component';
import { ApiService } from './services/api1.service';
import { DialogComponent } from './dialog/dialog.component';
import { RatingpageComponent } from './ratingpage/ratingpage.component';
import { LoginComponent } from './login/login.component';
import { ShoppingCartService } from './services/shopping-cart.service';
import { AppErrorHandler } from './common/app-error-handler';
import { PizzaService } from './services/pizza.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { PostService } from './services/post.service';
import { AuthService } from './services/auth.servive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataSource } from '@angular/cdk/collections';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { DatePipe } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './header/header.component';
import { ProductlistComponent } from './productlist/productlist.component';


// Configure the routes 
const routes: Routes = [ 
  {path: 'getProduct', component: PizzasComponent},
  {path: 'cart', component: ShoppingCartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'ratings', component: RatingpageComponent},
  {path: 'dialog', component: DialogComponent},
  {path: 'discount', component: DiscountComponent},
  {path: 'search', component: PizzaComponent},
  {path: 'pizza/name/:name',component:ProductlistComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    PizzasComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    LoginComponent,
    DialogComponent,
    DiscountComponent,
    RatingpageComponent,
    PizzaComponent,
    ProductlistComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    FlexLayoutModule,
    LayoutModule,
    NgbModule,
    RouterModule.forRoot(routes),
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [
    PostService, 
    AuthService,
    PizzaService,
    AppErrorHandler,
    ShoppingCartService,
    ApiService,
    DatePipe
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]

})
export class AppModule { }
