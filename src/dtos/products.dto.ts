import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { ApiProperty, PartialType, OmitType } from '@nestjs/swagger';

export class CreateProductDTO {

  @ApiProperty({ description: 'Nombre del producto' })
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty({ description: 'Descripción del producto' })
  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @ApiProperty({ description: 'Precio del producto' })
  @IsNotEmpty()
  @IsNumber()
  readonly price: number;
}

export class UpdateAuthorDto extends PartialType(
  OmitType(CreateProductDTO, ['name']),
) {}
