import { UserService } from '../services/user.service';
import { Module } from '@nestjs/common';
import { UserController } from '../controllers/user.controller';
import { TaskModule } from './task.module';
import { TaskService } from 'src/services/task.service';
import { StatusService } from 'src/services/status.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { TaskEntity } from 'src/entities/task.entity';
import { StatusEntity } from 'src/entities/status.entity';

@Module({
  imports: [TaskModule, TypeOrmModule.forFeature([UserEntity, TaskEntity,StatusEntity])],
  controllers: [UserController],
  providers: [UserService, TaskService, StatusService],
})
export class UserModule {}
