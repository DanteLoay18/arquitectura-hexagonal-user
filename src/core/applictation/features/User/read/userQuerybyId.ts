import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { UserUseCases } from "src/core/applictation/services/user.useCase";
import { User } from "src/core/domain/entity/collections/user.entity";


export class UsuarioQueryById {
    
    constructor(public readonly id: string) { }
    
}




@QueryHandler(UsuarioQueryById)
export class UsuarioQueryByIdHandler implements IQueryHandler<UsuarioQueryById>{

    constructor(private userUseCases: UserUseCases) { }

    execute(query: UsuarioQueryById): Promise<User> {
        console.log('Desde el handler')
        return this.userUseCases.findOneById(query.id);
    }

}
