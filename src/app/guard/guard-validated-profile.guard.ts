import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import { StudentServiceService } from '../student-service.service';

@Injectable({
  providedIn: 'root'
})
export class GuardValidatedProfileGuard implements CanActivate {
  
  constructor(private router: Router,private studentService: StudentServiceService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    
    return this.studentService.estProfileNonValide().pipe(
      map((result: boolean) => {
        if (result === true) {
          return true;
        } else {
          this.router.navigate(['/student/dashboard']); 
          return false;
        }
      }),
      catchError(error => {
        this.router.navigate(['/student/dashboard']); 
        return of(false);
      })
    );
  }
}
