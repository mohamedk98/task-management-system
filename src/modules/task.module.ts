import { StatusEntity } from 'src/entities/status.entity';
import { TaskEntity } from 'src/entities/task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";
import { TaskController } from "src/controllers/task.controller";
import { StatusService } from "src/services/status.service";
import { TaskService } from "src/services/task.service";
import { StatusModule } from "./status.module";


@Module({
    imports:[StatusModule,TypeOrmModule.forFeature([TaskEntity,StatusEntity])],
    controllers:[TaskController],
    providers:[TaskService,StatusService]
})

export class TaskModule{}