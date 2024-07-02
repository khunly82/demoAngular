import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoaderService } from '../services/loader.service';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  // injection de dépendance
  let loaderService = inject(LoaderService);
  
  // afficher le loader
  loaderService.isLoading.set(true);
  return next(req).pipe(finalize(() => {
    // cacher le loader
    loaderService.isLoading.set(false);
  }));
};
