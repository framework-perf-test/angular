import { ScullyConfig } from '@scullyio/scully';
import { MinifyHtml } from 'scully-plugin-minify-html';

export const config: ScullyConfig = {
  puppeteerLaunchOptions: { args: ['--no-sandbox', '--disable-setuid-sandbox'] },
  projectRoot: "./src",
  projectName: "angular",
  outDir: './dist/angular-static',
  routes: {
  },
  defaultPostRenderers: [MinifyHtml]
};