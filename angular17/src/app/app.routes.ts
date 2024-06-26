import { Routes } from '@angular/router';
import { MaquetacionComponent } from './componentes/maquetacion/maquetacion.component';

export const routes: Routes = [
    {path:'maqueta', component:MaquetacionComponent},
    {path:'', redirectTo:'maqueta', pathMatch:'full'}
];
