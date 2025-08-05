import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('questions')
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  question: string;
}
