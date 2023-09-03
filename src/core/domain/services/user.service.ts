import { User } from "../entity/collections/user.entity";
import { UserRepository } from "../ports/outbound/user.repository";


export class UserService{
    constructor(private readonly userRepository: UserRepository){}

    createUser(user:User){
        return this.userRepository.create(user);
    }
}