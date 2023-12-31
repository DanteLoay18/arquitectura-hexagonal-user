import { Module } from '@nestjs/common';
import { CoreModule } from 'src/core/core.module';
import {UserController} from './controllers/user.controller'
@Module({
    imports:[CoreModule],
    controllers:[
        UserController
    ]
})
export class HttpServerModule {}
