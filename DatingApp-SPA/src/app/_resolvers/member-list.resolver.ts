import { Injectable } from '@angular/core';
import { User } from '../_models/User';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class MemberListResolver implements Resolve<User> {
        constructor(private userService: UserService,
        private router: Router, private alertify: AlertifyService) {}

        resolve(route: ActivatedRouteSnapshot): Observable<User> {
           return this.userService.getUsers().pipe(
                   catchError(error => {
                        this.alertify.error('Problem retriving data');
                        this.router.navigate(['/home']);
                        return of(null);
                   })
                );
        }

}
