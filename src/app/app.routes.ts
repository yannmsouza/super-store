import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { Error404PageComponent } from './pages/error-404-page/error-404-page.component';

const routes: Routes = [
    //home 
    {
        path: '',
        component: HomePageComponent
    },
    //produtos
    {
        path: 'products',
        component: ProductsPageComponent
    },
    {
        path: 'products/:slug/:id',
        component: ProductPageComponent
    },
    //handling 404
    {
        path: '**',
        component: Error404PageComponent
    }


];

export const RoutingModule = RouterModule.forRoot(routes);
