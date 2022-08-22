import { CrudController } from '@nestjsx/crud';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
export declare class UsersController implements CrudController<User> {
    service: UsersService;
    constructor(service: UsersService);
}
