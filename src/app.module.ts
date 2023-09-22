import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getEnvFilePath } from './app.helper';
import { AuthModule } from './auth/auth.module';

const srcDir = process.cwd();
const envFilePath: string = getEnvFilePath(`${srcDir}/src/environments`);

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({ envFilePath }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('MONGO_URL'),
      }),
    }),
    AuthModule,
  ],
})
export class AppModule {}
