import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { AdaptersModule } from './infraestructure/adapters/adapters.module';
import { HttpServerModule } from './infraestructure/http-server/http-server.module';
import { PersistenceModule } from './infraestructure/persistence/persistence.module';
import { SharedModule } from './infraestructure/shared/shared.module';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [
    CoreModule, 
    HttpServerModule, 
    SharedModule,
    CqrsModule
    ],
  
})
export class AppModule {}
