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

@Controller('users') // /users
export class UsersController {
  /*
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
*/

  @Get() // /users or /users?role=value
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return [];
  }

  /*  NUMBER 1 RULE: All routes have to come before the routes with params like :id to work */

  @Get('interns') // /users/interns
  findAllInterns() {
    return [];
  }

  @Get(':id') // /users/123
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post() // /users
  create(@Body() user: {}) {
    return user;
  }

  @Patch(':id') // /users/123
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  @Delete(':id') // /users/123
  delete(@Param('id') id: string) {
    return { id };
  }
}
