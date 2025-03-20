import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.BrainZCx.app',
  appName: 'BrainZCx',
  webDir: 'dist/code',
  server: {
    androidScheme: 'https',
  },
};

export default config;
