import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CountriesModule } from './countries/countries.module';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [CountriesModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
