import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.m';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
