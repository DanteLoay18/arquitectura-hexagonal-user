import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateUserCommand } from "./create-user.command";
import { UserUseCases } from "src/core/applictation/services/user.useCase";

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {

    constructor(private userUseCases: UserUseCases) { }

    async execute(command: CreateUserCommand) {
        
        return this.userUseCases.createUser(command.createUserDto)
    }

}