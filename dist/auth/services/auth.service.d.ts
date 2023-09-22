import { UsersService } from 'src/users/services/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    signIn(username: string, pass: string): Promise<any>;
}
