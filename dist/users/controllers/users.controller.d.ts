import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<any>;
    findOne(params: any): Promise<any>;
    findAll(): Promise<any>;
}
