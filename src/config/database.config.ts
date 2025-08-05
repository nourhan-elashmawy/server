import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default (): TypeOrmModuleOptions => ({
  driver: process.env.type,
  host: process.env.host,
  port: process.env.port ? parseInt(process.env.port, 10) : 5432,
  username: process.env.username,
  password: process.env.password,
  database: process.env.database,
  entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
  synchronize: process.env.synchronize === 'true',
});
