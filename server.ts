import { Request, Response, NextFunction } from 'express';
import { APP_BASE_HREF } from '@angular/common';
import { ngExpressEngine } from '@nguniversal/express-engine';
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join, resolve } from 'path';
import { AppServerModule } from './src/main.server';

export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(browserDistFolder, 'index.html');

  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  }));

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // Serve static files from /browser
  server.get('*.*', express.static(browserDistFolder, {
    maxAge: '1y',
  }));

  // All regular routes use the Angular engine
  server.get('*', (req: Request, res: Response, next: NextFunction) => {
    const { protocol, originalUrl, headers } = req;

    res.render(indexHtml, {
      document: indexHtml,
      url: `${protocol}://${headers.host}${originalUrl}`,
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }, (err: any, html: string) => {
      if (err) {
        return next(err);
      }
      res.send(html);
    });
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
