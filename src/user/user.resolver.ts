import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { CreateUserDto } from "./input/create-user.dto";
import { CheckUser, User } from "./models/user.model.type";
import { GetUserDto } from "./output/get-user.dto";
import { UserService } from "./user.service";

@Resolver()
export class UserResolver {
    constructor (
        private readonly userService: UserService
    ) {}

    @Query(() => User)
    getUser(@Args('getUser') getUserDto: GetUserDto) {
        return this.userService.getUser(getUserDto);
    }

    @Query(() => User)
    AAAAA(@Args('id') email: number, @Args('name') name: string) {
        return {email, name}
    }

    @Query(() => CheckUser)
    checkIfUserExist(@Args('email') email: string) {
        return this.userService.checkIfUserExist(email);
    }

    @Mutation(() => User)
    createUser(@Args('createUser') createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }
}