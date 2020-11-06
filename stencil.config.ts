import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'demo-stenciljs-scoped-styles',
  plugins: [
    sass(),
  ],
  globalStyle: 'src/global/common-styles.scss',
  globalScript: 'src/global/common-es-modules.ts',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
