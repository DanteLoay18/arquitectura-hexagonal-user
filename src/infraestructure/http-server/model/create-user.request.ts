import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsBoolean } from "class-validator";

export class CreateUserRequest {

    @ApiProperty({
        description: 'Categoria id',
    })
    @IsString()
    nombre: string;
   
    @ApiProperty({
        description: 'Categoria Name',
    })
    @IsString()
    apellidos: string;

    // @ApiProperty({
    //     description: 'Categoria Description',
    // })
    // @IsBoolean()
    // activo:boolean;

    

    
}