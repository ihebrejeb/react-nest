// task.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { Project } from './entities/project.entity';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const { projectId, ...taskData } = createTaskDto;
    const task = this.taskRepository.create(taskData);

    if (projectId) {
      const project = await this.projectRepository.findOne({
        where: { id: projectId },
      });
      task.project = project;
    }

    return this.taskRepository.save(task);
  }

  async getTasksByProjectId(projectId: number): Promise<Task[]> {
    return this.taskRepository.find({ where: { project: { id: projectId } } });
  }

  async delete(id: number): Promise<void> {
    await this.taskRepository.delete(id);
  }
}
