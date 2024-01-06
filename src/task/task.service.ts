import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTask } from './dto/update-task.dto';
import { PrismaService } from '../../src/prisma/prisma.service';
import { REQUEST } from '@nestjs/core';
import { Inject } from '@nestjs/common';

@Injectable()
export class TaskService {
  constructor(
    private prisma: PrismaService,
    @Inject(REQUEST) private req: any,
  ) {}

  async createTask(data: CreateTaskDto) {
    data.user_id = this.req.user.id;
    const result = await this.prisma.tasks.create({ data });
    return {
      statusCode: HttpStatus.OK,
      data: result,
    };
  }

  async getAllTask() {
    const result = await this.prisma.tasks.findMany({
      where: { user_id: this.req.user.id },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
    return {
      statusCode: HttpStatus.OK,
      data: result,
    };
  }

  async getTaskById(task_id: number) {
    const task = await this.prisma.tasks.findFirst({
      where: { id: task_id, user_id: this.req.user.id },
    });
    return {
      statusCode: HttpStatus.OK,
      data: task,
    };
  }

  async updateTask(task_id: number, data: UpdateTask) {
    const taskUpdate = await this.prisma.tasks.update({
      where: { id: task_id },
      data: data,
    });
    return {
      statusCode: HttpStatus.OK,
      data: taskUpdate,
    };
  }

  async deleteTaskById(task_id: number) {
    const taskDelete = await this.prisma.tasks.delete({
      where: { id: task_id },
    });

    if (!taskDelete) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Task not found',
      };
    }

    return {
      statusCode: HttpStatus.OK,
      message: 'Task deleted successfully',
    };
  }
}
