import { Module } from '@nestjs/common';
import { PersistenceModule } from '../persistence/persistence.module';
import { MongoUserRepository } from './domain/mongo-user.repository';

export const USER_REPOSITORY = 'USER_REPOSITORY'
const providers = [
    MongoUserRepository,
   
    {
        provide: USER_REPOSITORY,
        useExisting: MongoUserRepository,
    }
]

@Module({
    imports:[
        PersistenceModule
    ],
    providers:[
        ...providers
    ],
    exports:[
        ...providers
    ]
})
export class AdaptersModule {}
