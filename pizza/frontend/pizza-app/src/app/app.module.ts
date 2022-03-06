import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { SearchComponent } from './search/search.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostComponent } from './post/post.component';
import { PostService } from './services/post.service';
import { AuthService } from './services/auth.servive';

@NgModule({
  declarations: [
    AppComponent,
    PizzasComponent,
    SearchComponent,
    PostListComponent,
    PostCreateComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PostService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
