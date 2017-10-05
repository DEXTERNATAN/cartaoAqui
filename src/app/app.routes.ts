import { CartaoComponent } from './cartao/cartao.component';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
	{ path: 'home', component: AppComponent, pathMatch: 'full' },
	{ path: 'cartao', component: CartaoComponent },
	//{ path: 'complexidade/:id', component: ComplexidadeFormComponent }
];

export const appRouting = RouterModule.forChild(appRoutes);