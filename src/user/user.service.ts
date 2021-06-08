import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./input/create-user.dto";
import { CheckUser, User } from "./models/user.model.type";
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

    checkIfUserExist(email: string) {
        // const user = this.users.filter((item) => {
        //     return item.email === email;
        // })
        const user = this.users.find(item => item.email === email)
        console.log(user);
        const checkUser = new CheckUser();
        if(!user) {
            checkUser.isExists = false;
            return checkUser;
        } 
        checkUser.isExists = true;
        return checkUser;
    }

    createUser(createUserDto: CreateUserDto) {
        const user: User = {
            ...createUserDto,
        }
        
        this.users.push(user);
        return user;
    }  
}