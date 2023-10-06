import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationServiceService } from '../authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class GuardSystemManagerGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      const userRoles = user['roles'];
      if (userRoles && userRoles.includes('ROLE_SYSTEM_MANAGER')) {
        console.log("roles",userRoles)
        return true; // Allow access to the route
      }
    }
    
    // Redirect to the last attempted URL or a default URL
    this.router.navigate(['/authentication/login']); // Change 'default' to the desired URL
    return false;
  }
  
}
