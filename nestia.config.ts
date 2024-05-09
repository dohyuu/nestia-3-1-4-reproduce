import { INestiaConfig } from '@nestia/sdk';

const config: INestiaConfig = {
  input: 'src/*.controller.ts',
  output: 'src/api',
};
export default config;
