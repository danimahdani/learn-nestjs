import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { tasks } from './data/tasks';
import { UpdateTask } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  async createTask(data: CreateTaskDto) {
    return {
      statusCode: 200,
      data,
    };
  }

  async getAllTask() {
    return {
      statusCode: 200,
      data: tasks,
    };
  }

  async getTaskById(task_id: number) {
    // console.log(typeof task_id);
    return {
      statusCode: 200,
      data: tasks.find((task) => task.task_id === task_id),
    };
  }

  async updateTask(task_id: number, data: UpdateTask) {
    return {
      statusCode: 200,
      task_id,
      data: data,
    };
  }

  async deleteTaskById(task_id: number) {
    return {
      statusCode: 200,
      data: tasks.find((task) => task.task_id === task_id),
      message: 'Success delete task',
    };
  }
}
