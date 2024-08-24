import { Routes } from '@angular/router';
import { AutosComponent } from './pages/autos/autos.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { HomeComponent } from './components/home/home.component';
import { EditarAutoComponent } from './pages/editar-auto/editar-auto.component';
import { ApiCComponent } from './pages/api-c/api-c.component';


export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"auto",component:AutosComponent},
    {path:"producto",component:ProductosComponent},
    {path:"editarAuto/:idProducto",component:EditarAutoComponent},
    {path:"apiC",component:ApiCComponent},





    {path:"**",redirectTo:"",pathMatch:'full' }


];
