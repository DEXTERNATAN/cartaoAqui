import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartaoComponent } from './cartao/cartao.component';
import { HomeComponent } from './home/home.component';
import { ConfigCartaoComponent } from './config-cartao/config-cartao.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cartao', component: CartaoComponent },
  { path: 'config-cartao', component: ConfigCartaoComponent }
  //{ path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartaoComponent,
    HomeComponent,
    ConfigCartaoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
