import { ApiInternalServerErrorResponse, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Controller, Post, Body, Inject, UseFilters } from "@nestjs/common";

import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { CreateUserRequest } from "../model/create-user.request";
import { CreateUserCommand } from "src/core/applictation/features/User/write/create/create-user.command";

@ApiTags('User')
@Controller('/user')
export class UserController{

    constructor(
        private command: CommandBus,
        private query: QueryBus
    ) {}
    
    @ApiInternalServerErrorResponse({ description: 'Error server'})
    // @ApiResponse({ description: "Order Created", type: OrderCreatedDto })
    @Post()
    async create(@Body() createUserRequest: CreateUserRequest): Promise<CreateUserRequest> {
       
        return await this.command.execute(new CreateUserCommand(createUserRequest))
    }
}