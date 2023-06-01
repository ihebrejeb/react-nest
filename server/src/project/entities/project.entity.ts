import { v4 as uuid } from 'uuid';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
