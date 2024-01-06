import { IsOptional, IsString } from 'class-validator';

export class UpdateTask {
  @IsString()
  @IsOptional()
  task_name?: string;

  @IsOptional()
  @IsString()
  task_description?: string;

  user_id: number;
}
