import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { LocalStorageModule } from 'angular-2-local-storage';

@Injectable()
export class CanRedirectToHomeGuard implements CanActivate {
  constructor(public localStorage: LocalStorageModule){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('Does token exist ? ' + !!localStorage.token);
    return !!localStorage.token;
  }
}