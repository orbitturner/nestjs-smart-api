/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { ApiTagsList } from 'src/config/app.config';

@ApiTags(ApiTagsList.USERS)
@Crud({
  model: {
    type: User
  },
})
@Controller('users')
export class UsersController implements CrudController<User> {
  constructor(public service: UsersService) {}
    
  
}
