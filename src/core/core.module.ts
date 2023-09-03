import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AdaptersModule, USER_REPOSITORY } from 'src/infraestructure/adapters/adapters.module';
import { PersistenceModule } from 'src/infraestructure/persistence/persistence.module';
import { UserUseCases } from './applictation/services/user.useCase';
import { CreateUserCommand } from './applictation/features/User/write/create/create-user.command';
import { CreateUserHandler } from './applictation/features/User/write/create/create-user.handler';
import { UserService } from './domain/services/user.service';
import { UserRepository } from './domain/ports/outbound/user.repository';

const providers = [
    UserUseCases,
    CreateUserCommand,
    CreateUserHandler
  ]

@Module({
    imports:[
        PersistenceModule,
        AdaptersModule,
        CqrsModule
    ],
    providers:[
        ...providers,
        {
            provide:UserService,
            useFactory:(
                userRepository:UserRepository
            )=> new UserService(userRepository),
            inject:[
                USER_REPOSITORY
            ]
        },
        {
            provide: UserUseCases,
            useFactory: (userService: UserService) => new UserUseCases(userService),
            inject: [
              UserService,
            ] 
        }
    ],
    exports: [
        ...providers,
        CqrsModule,
        AdaptersModule,
      ]
})
export class CoreModule {}
