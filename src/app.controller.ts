import { Controller, Post, Get, Put, Delete, Param, Query, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {}


  /* ********************
           GET
  ******************** */

  @Get('products')
  getProducts(@Query('limit') limit = 10, @Query('offset') offset = 0): string {
    return `Lista de productos limit=${limit} offset=${offset}`;
  }

  /* @Get('product/:idProduct')
  getProduct1(@Param() params: any): string {
    return `Producto id: ${params.idProduct}`;
  } */
  @Get('product/:idProduct')
  getProduct2(@Param('idProduct') idProduct: string): string {
    return `Producto id: ${idProduct}`;
  }

  /* Ejemplo Bloqueo de Endpoints */

  @Get('products/:idProduct')
  endpoint1() {
    // ...
  }

  @Get('products/filter')
  endpoint2() {
    // ...
  }


  /* ********************
           POST
  ******************** */

  @Post('product')
  createProducto(@Body() body: any): any {
    return {
      name: body.name,
      price: body.price
    };
  }


  /* ********************
           PUT
  ******************** */

  @Put('product/:idProduct')
  updateProducto(@Param('idProduct') idProduct: string, @Body() body: any): any {
    return {
      idProduct: idProduct,
      name: body.newName,
      price: body.newPrice
    };
  }


  /* ********************
          DELETE
  ******************** */

  @Delete('product')
  deleteProducto(@Param('idProduct') idProduct: string): any {
    return {
      idProduct: idProduct,
      delete: true,
      count: 1
    };
  }

}
