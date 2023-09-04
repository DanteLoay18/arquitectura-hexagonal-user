import { User } from "../../entity/collections/user.entity";


export interface UserRepository{

    create(user: User): Promise<User>
    findOneById(id: string):Promise<User>
    findAll():Promise<User[]>
}