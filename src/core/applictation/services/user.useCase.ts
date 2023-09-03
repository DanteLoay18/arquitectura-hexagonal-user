import { Injectable } from '@nestjs/common';
import { UserService } from 'src/core/domain/services/user.service';
import { CreateUserDto } from 'src/core/shared/dtos/create-user.dto';


@Injectable()
export class UserUseCases{
    constructor(private userService:UserService){}

    async createUser(createUserDto:CreateUserDto){
        return await this.userService.createUser(createUserDto);
    }
}