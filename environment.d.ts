declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NEXT_PUBLIC_MANAGEMENTURL: string; // this is the line you want
        NODE_ENV: 'development' | 'production';
        PORT?: string;
        PWD: string;
      }
    }
  }