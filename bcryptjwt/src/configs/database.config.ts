import { registerAs } from '@nestjs/config';

export default registerAs('mongo', () => {
  const username = process.env.MONGO_USERNAME;
  const password = process.env.MONGO_PASSWORD;
  const resourse = process.env.MONGO_RESOURCE;
  const uri = `mongodb+srv://${username}:${password}@${resourse}`;
  return {
    username,
    password,
    resourse,
    uri,
  };
});
