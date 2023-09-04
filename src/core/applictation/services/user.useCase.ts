import { Injectable, NotFoundException, BadRequestException, InternalServerErrorException} from '@nestjs/common';
import { User } from 'src/core/domain/entity/collections/user.entity';
import { UserService } from 'src/core/domain/services/user.service';
import { CreateUserDto } from 'src/core/shared/dtos/create-user.dto';


@Injectable()
export class UserUseCases{
    constructor(private userService:UserService){}

    async createUser(createUserDto:CreateUserDto){
        try {
            const user= User.create(createUserDto.nombre, createUserDto.apellidos)
            return await this.userService.createUser(user);
        } catch (error) {
            this.handleExceptions(error)
        }
        
    }

    async findOneById(id:string){
        const user= await this.userService.findOneById(id);
        if(!user || !user.activo) throw new NotFoundException(`El usuario con el ${id} no existe`)
        
        return user; 
    }

    async findAll(){
        
    }

    private handleExceptions(error:any){
        if(error.code = 11000)
          throw new BadRequestException(`Usuario ya existe en la db ${JSON.stringify(error.keyValue)}`);
          
          console.log(error);
          throw new InternalServerErrorException(`No se pudo realizar la accion del pokemon - chequear los logs`)
      }
}