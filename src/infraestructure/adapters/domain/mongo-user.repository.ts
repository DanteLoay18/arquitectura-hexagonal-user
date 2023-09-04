import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserRepository } from "src/core/domain/ports/outbound/user.repository";
import { User } from "src/infraestructure/persistence/db/entities/user.entity";

@Injectable()
export class MongoUserRepository implements UserRepository {
    
    constructor(@InjectModel(User.name) private userRepository: Model<User>) { }
    
    
    
    create(user: User): Promise<User> {
        return this.userRepository.create(user);
    }

    findOneById(id: string): Promise<User> {
        return this.userRepository.findById(id);
    }
    findAll(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    
   

}