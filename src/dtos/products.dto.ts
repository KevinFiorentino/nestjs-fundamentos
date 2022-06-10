import { IsNotEmpty, IsString, IsNumber, IsUrl } from 'class-validator';
import { PartialType, OmitType } from '@nestjs/mapped-types';

export class CreateProductDTO {

  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @IsNotEmpty()
  @IsUrl()
  readonly image: string;
}

export class UpdateAuthorDto extends PartialType(
  OmitType(CreateProductDTO, ['name']),
) {}
