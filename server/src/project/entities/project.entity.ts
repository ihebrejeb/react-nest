import { v4 as uuid } from 'uuid';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Task } from './task.entity';
import { OneToMany } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  title: string;

  @Column('text')
  description: string;

  @Column({ default: () => `'https://picsum.photos/seed/${uuid()}/200/300'` })
  image: string;
  // TODO: Add the necessary relationship methods or properties to establish the relationship between the Project and Task entities.

  @OneToMany(() => Task, (task) => task.project)
  tasks: Task[];
}
