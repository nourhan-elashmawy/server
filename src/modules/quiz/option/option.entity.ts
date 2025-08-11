import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Question } from '../question/question.entity';

@Entity('options')
@Unique(['text', 'question'])
export class Option {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  text: string;

  @Column('boolean')
  isCorrect: boolean;

  @ManyToOne(() => Question, (question) => question.options)
  question: Question;
}
