import { Injectable } from "@nestjs/common";
import { Task } from "../../generated/prisma/client";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class TaskService {
    constructor(private prismaService: PrismaService) { }

    public async getAllTask(): Promise<Task[]> {
        return this.prismaService.task.findMany();
    }

    public async getTaskById(id: number): Promise<Task | null> {
        return this.prismaService.task.findUnique({
            where: {
                id
            }
        });
    }

    public async createTask(data: Task): Promise<Task> {
        return this.prismaService.task.create({
            data
        });
    }

    public async updateTask(taskId: number, data: Task): Promise<Task> {
        return this.prismaService.task.update({
            where: {
                id: taskId,
            },
            data
        });
    }

    public async deleteTask(taskId: number): Promise<Task> {
        return this.prismaService.task.delete({
            where: {
                id: taskId
            }
        });
    }
}