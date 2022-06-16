import { Module } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PruebaModule } from './modules/prueba/prueba.module';
import { Prueba2Module } from './modules/prueba2/prueba2.module';

const API_KEY = '1324567890';

@Module({
  imports: [PruebaModule, Prueba2Module],
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
    {
      provide: 'DATA',
      useFactory: async (http: HttpService) => {
        return await http.get('<URL_REQUEST>').toPromise()
      },
      inject: [HttpService]
    }
  ],
  exports: [AppService]
})
export class AppModule {}
