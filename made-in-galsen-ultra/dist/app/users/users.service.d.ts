import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { User } from './entities/user.entity';
export declare class UsersService extends TypeOrmCrudService<User> {
    constructor(repo: any);
}
