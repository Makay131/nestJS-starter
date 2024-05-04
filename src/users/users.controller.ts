import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users') // /users
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /*
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
*/

  @Get() // /users or /users?role=value
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.usersService.findAll(role);
  }

  /*  NUMBER 1 RULE: All routes have to come before the routes with params like :id to work */

  @Get('interns') // /users/interns
  findAllInterns() {
    return [];
  }

  @Get(':id') // /users/123
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Post() // /users
  create(
    @Body()
    user: {
      name: string;
      email: string;
      role: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    return this.usersService.create(user);
  }

  @Patch(':id') // /users/123
  update(
    @Param('id') id: string,
    @Body()
    userUpdate: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    return this.usersService.update(+id, userUpdate);
  }

  @Delete(':id') // /users/123
  delete(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}
