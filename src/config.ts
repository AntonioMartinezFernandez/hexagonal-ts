import { config as dotEnvConfig } from 'dotenv';
dotEnvConfig();

export const config = {
  server: {
    port: process.env.PORT as string,
  },
};
