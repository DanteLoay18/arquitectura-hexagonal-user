import { ApiInternalServerErrorResponse, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Controller, Post, Body, Get, Param, ParseUUIDPipe } from "@nestjs/common";

import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { CreateUserRequest } from "../model/create-user.request";
import { CreateUserCommand } from "src/core/applictation/features/User/write/create/create-user.command";
import { User } from "src/infraestructure/persistence/db/entities/user.entity";
import { UsuarioQueryById } from "src/core/applictation/features/User/read/userQuerybyId";
import { AppResponse } from "../model/app.response";

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
    async createUser(@Body() createUserRequest: CreateUserRequest): Promise<AppResponse> {
        const {nombre, apellidos}=  await this.command.execute(new CreateUserCommand(createUserRequest))
        return {
            status: 200,
            message: 'Product Created',
            data: {nombre, apellidos}
        }
    }

    @ApiInternalServerErrorResponse({ description: 'Error server'})
    // @ApiResponse({ description: "Order Created", type: OrderCreatedDto })
    @Get(':id')
    async findOneById(@Param('id', new ParseUUIDPipe({version:'4'})) id: string): Promise<AppResponse> {
        const {nombre, apellidos} = await this.query.execute(new UsuarioQueryById(id));
        return {
            status: 200,
            message: 'Product Created',
            data: {nombre, apellidos}
        }
    }
}