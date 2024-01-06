import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTask } from './dto/update-task.dto';
import { AuthGuard } from '../../src/auth/auth.guard';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @UseGuards(AuthGuard)
  @Post()
  async createTask(@Body() body: CreateTaskDto) {
    return await this.taskService.createTask(body);
  }

  @UseGuards(AuthGuard)
  @Get()
  async getAllTask() {
    return await this.taskService.getAllTask();
  }

  @UseGuards(AuthGuard)
  @Get('/:task_id')
  async getTaskById(@Param('task_id') task_id: number) {
    return await this.taskService.getTaskById(+task_id);
  }

  @UseGuards(AuthGuard)
  @Patch('/:task_id')
  async updateTask(
    @Param('task_id') task_id: number,
    @Body() data: UpdateTask,
  ) {
    return await this.taskService.updateTask(+task_id, data);
  }

  @UseGuards(AuthGuard)
  @Delete('/:task_id')
  async deleteTaskById(@Param('task_id') task_id: number) {
    return this.taskService.deleteTaskById(+task_id);
  }
}
