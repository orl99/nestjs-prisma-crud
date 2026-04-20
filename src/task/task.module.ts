import { Module } from "@nestjs/common";
import { TaskController } from './task.controller';
import { PrismaModule } from "../prisma/prisma.module";
import { TaskService } from './task.service';

@Module({
    providers: [TaskService,],
    imports: [PrismaModule],
    controllers: [TaskController],
})
export class TaskModule { }