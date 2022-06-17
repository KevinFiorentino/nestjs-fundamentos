import { Module, Global } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule, HttpService } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PruebaModule } from './modules/prueba/prueba.module';
import { Prueba2Module } from './modules/prueba2/prueba2.module';
import { environments } from './environment';

import * as Joi from 'joi';

import config from './config';

const API_KEY = '1324567890';

@Global()
@Module({
  imports: [
    HttpModule,
    /* ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        API_KEY: Joi.string().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
      })
    }), */

    PruebaModule,
    Prueba2Module
  ],
  controllers: [AppController],
  providers: [
    {
      provide: AppService,
      useClass: AppService
    },
    {
      provide: 'API_KEY',
      useValue: API_KEY
    },
    /* {
      provide: 'DATA',
      useFactory: async (http: HttpService) => {
        return await http.get('<URL_REQUEST>').toPromise()
      },
      inject: [HttpService]
    } */
  ],
  exports: [AppService]
})
export class AppModule {}
