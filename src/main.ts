import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { LayoutComponent } from './app/layout/layout.component';

bootstrapApplication(LayoutComponent, {
  providers: [provideRouter(routes)]
});
