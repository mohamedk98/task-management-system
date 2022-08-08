import { UserService } from '../services/user.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
@ApiTags("users")
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async getAll() {
    return await this.userService.getAll();
  }
  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.getOne(id);
  }
  @Post()
  async addOne(@Body() user: { username: string; password: string }) {
    return await this.userService.addOne(user.username, user.password);
  }
  @Put(':id')
  async updateOne(
    @Param('id',ParseIntPipe) id: number,
    @Body() user: { username: string; password: string },
  ) {
    return await this.userService.updateOne(id, user);
  }
  @Delete(':id')
  async DeleteOne(@Param('id',ParseIntPipe) id: number) {
    return await this.userService.deleteOne(id);
  }
}
