import {IsNotEmpty, Length} from 'class-validator'

export class UserViewModel {
    constructor( userLogin: string, userName: string, password: string){
        this.userLogin = userLogin
        this.userName = userName
        this.password = password
    }

    @IsNotEmpty()
    @Length(3,10)
    readonly userLogin: string;

    @IsNotEmpty()
    readonly userName: string;

    @IsNotEmpty()
    readonly password: string;
}