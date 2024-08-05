// src/main.server.ts
import { enableProdMode } from '@angular/core';
import { AppServerModule } from './app/app.module.server';
import { renderModule } from '@angular/platform-server';

enableProdMode();


export { AppServerModule } ;
export { renderModule};
