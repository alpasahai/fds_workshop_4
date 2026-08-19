import { Routes } from '@angular/router';
import {Home} from './comp/home/home';
import {Login} from './comp/login/login';
//import {Profile} from './comp/profile/profile';
//import {authGuard} from './guards/auth-guard';

export const routes: Routes = [
    {
        path:'',
        component:Home
    },
    {
      path:'login',
      component:Login
    },
    {
      path:'login/:id',
      component:Login
    },
    // {
    //   path:'account',
    //   component:Profile,
    //   canActivate:[authGuard]
    // }
];
