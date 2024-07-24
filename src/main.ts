import { bootstrapApplication } from '@angular/platform-browser';
import { RtpComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(RtpComponent, appConfig).catch((err) =>
  console.error(err),
);
