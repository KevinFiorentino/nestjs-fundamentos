import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('new-endpoint')
  newEndpoint(): string {
    return 'New endpoint';
  }

  @Get('product/:idProduct')
  getProduct1(@Param() params: any): string {
    return `Producto id: ${params.idProduct}`;
  }

  @Get('product/:idProduct')
  getProduct2(@Param('idProduct') idProduct: string): string {
    return `Producto id: ${idProduct}`;
  }

}
