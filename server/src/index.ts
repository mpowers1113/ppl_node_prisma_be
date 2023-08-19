import { App } from './app';

new App(process.env.PORT || 3000).initialize().then(app => app.start());
