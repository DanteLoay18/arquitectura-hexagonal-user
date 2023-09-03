import { ApiProperty } from "@nestjs/swagger";

export class CreateUserRequest {

    @ApiProperty({
        description: 'Categoria id',
    })
    nombre: string;
   
    @ApiProperty({
        description: 'Categoria Name',
    })
    apellidos: string;

    @ApiProperty({
        description: 'Categoria Description',
    })
    activo:boolean;

    

    
}