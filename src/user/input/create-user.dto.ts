import { ArgsType, Field, InputType, ObjectType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";

@InputType()
export class CreateUserDto {
    @Field(() => String)
    @IsString()
    name: string;

    @Field(() => String)
    @IsString()
    email: string;
}