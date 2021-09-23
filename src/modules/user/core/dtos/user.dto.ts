import { IsBoolean, IsDate, IsNotEmpty, IsString, IsUUID } from "class-validator";

export class UserDto {
    @IsString()
    @IsUUID()
    id?: string;

    @IsString()
    @IsNotEmpty()
    username:string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    profilePic?: string;

    @IsBoolean()
    @IsNotEmpty()
    isActive: boolean;

    @IsString()
    status?: string;

    @IsDate()
    createdAt?: Date;

    @IsDate()
    updatedAt?: Date;
}