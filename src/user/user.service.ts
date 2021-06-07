import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./input/create-user.dto";
import { User } from "./models/user.model.type";
import { GetUserDto } from "./output/get-user.dto";

@Injectable()
export class UserService {
    constructor() {}

    private users: User[] = []

    getUser(getUserDto: GetUserDto) {
        const user = this.users.find((elem) => elem.email === getUserDto.email);
        if(!user) {
            throw new BadRequestException('There is no user with that email');
        }
        return user;
    }

    createUser(createUserDto: CreateUserDto) {
        const user: User = {
            ...createUserDto,
        }
        
        this.users.push(user);
        return user;
    }  
}