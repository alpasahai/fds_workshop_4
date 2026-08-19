import { Component, inject } from '@angular/core';
import { RouterOutlet,RouterLink,Router } from '@angular/router';
import {Nav} from './comp/nav/nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,Nav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  private router = inject(Router);
  navbyurl(id:number){
    this.router.navigateByUrl('/login/' + id);

  }
  navby(id:number){
    this.router.navigate(['/login/', id]);

  }

  //locally storing the user if the user is logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  //Ensuring the user is removed from the local server if the user is logged out
  logout(){
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
