import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  password: process.env.DB_PASSWORD,
  database: process.env.DB_HOST,
}));
