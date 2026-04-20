import type { Task } from './../../generated/prisma/client';
import { TaskService } from './task.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

// task
@Controller('tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) { }

    @Get()
    async getAllTask() {
        return this.taskService.getAllTask();
    }

    @Post()
    async createTask(@Body() task: Task) {
        return this.taskService.createTask(task);
    }

    @Put()
    async updateTask(@Param('id') taskId: string, @Body() task: Task) {
        return this.taskService.updateTask(Number(taskId), task);
    }

    //GET localhost:3000/tasks/1
    @Get(':id')
    async getTaskById(@Param('id') taskId: string) {
        return this.taskService.getTaskById(Number(taskId));
    }

    // DELETE localhost:3000/tasks/1
    @Delete(':id')
    async deleteTaskById(@Param('id') taskId: string) {
        return this.taskService.getTaskById(Number(taskId));
    }
}