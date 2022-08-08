import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StatusController } from "src/controllers/status.controller";
import { StatusEntity } from "src/entities/status.entity";
import { StatusService } from "src/services/status.service";
import { TaskModule } from "./task.module";

@Module({
    imports:[TypeOrmModule.forFeature([StatusEntity])],
    controllers:[StatusController],
    providers:[StatusService]
})

export class StatusModule{}