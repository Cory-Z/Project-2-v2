// import { hmrPlugin, presets } from '@open-wc/dev-server-hmr';

/** Use Hot Module replacement by adding --hmr to the start command */
const hmr = process.argv.includes('--hmr');

export default {
  open: '/',
  appIndex: 'index.html', // Ensure the entry point is set
  nodeResolve: {
    exportConditions: ['browser', 'development'],
  },
  plugins: [],
};