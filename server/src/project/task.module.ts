// task.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { ProjectRepository } from './repositories/project.repository';
import { Project } from './entities/project.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task, Project, ProjectRepository])], // Add ProjectRepository to the forFeature() method
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
