import type { Task } from './../../generated/prisma/client';
import { TaskService } from './task.service';
import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, BadRequestException } from "@nestjs/common";

// task
@Controller('tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) { }

    @Get()
    async getAllTask() {
        try {
            return await this.taskService.getAllTask();
        } catch (error) {
            throw new BadRequestException('Failed to fetch tasks');
        }
    }

    @Post()
    async createTask(@Body() task: Task) {
        try {
            return await this.taskService.createTask(task);
        } catch (error) {
            throw new BadRequestException('Failed to create task');
        }
    }

    @Put(':id')
    async updateTask(@Param('id') taskId: string, @Body() task: Task) {
        try {
            return await this.taskService.updateTask(Number(taskId), task);
        } catch (error) {
            throw new BadRequestException('Failed to update task');
        }
    }

    //GET localhost:3000/tasks/1
    @Get(':id')
    async getTaskById(@Param('id') taskId: string) {
        try {
            const taskFound = await this.taskService.getTaskById(Number(taskId));
            if (!taskFound) throw new NotFoundException("No task found with id " + taskId);
            return taskFound;
        } catch (error) {
            if (error instanceof NotFoundException) throw error;
            throw new BadRequestException('Failed to fetch task');
        }
    }

    // DELETE localhost:3000/tasks/1
    @Delete(':id')
    async deleteTaskById(@Param('id') taskId: string) {
        try {
            return await this.taskService.deleteTask(Number(taskId));
        } catch (error) {
            throw new BadRequestException('Failed to delete task');
        }
    }
}