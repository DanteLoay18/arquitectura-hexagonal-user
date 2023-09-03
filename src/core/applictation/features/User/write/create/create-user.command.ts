import { CreateUserDto } from "src/core/shared/dtos/create-user.dto";

export class CreateUserCommand {
    
    constructor(public readonly createUserDto: CreateUserDto) { }
    
}