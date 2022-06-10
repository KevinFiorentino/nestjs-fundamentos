import { Controller, Post, Get, Put, Delete, Param, Query, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { ParseIntPipe } from './pipes/parse-int.pipe';
import { CreateProductDTO } from './dtos/products.dto';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {}


  /* ********************
           GET
  ******************** */

  @Get('products')
  @HttpCode(HttpStatus.OK)
  getProducts(@Query('limit') limit = 10, @Query('offset') offset = 0): string {
    return `Lista de productos limit=${limit} offset=${offset}`;
  }

  /* @Get('product/:idProduct')
  getProduct1(@Param() params: any): string {
    return `Producto id: ${params.idProduct}`;
  } */
  @Get('product/:idProduct')
  @HttpCode(HttpStatus.OK)
  getProduct2(@Param('idProduct', ParseIntPipe) idProduct: string): string {
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
  @HttpCode(HttpStatus.CREATED)
  createProducto(@Body() body: CreateProductDTO): any {
    // ...
  }


  /* ********************
           PUT
  ******************** */

  @Put('product/:idProduct')
  @HttpCode(HttpStatus.OK)
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
  @HttpCode(HttpStatus.OK)
  deleteProducto(@Param('idProduct') idProduct: string): any {
    return {
      idProduct: idProduct,
      delete: true,
      count: 1
    };
  }

}
