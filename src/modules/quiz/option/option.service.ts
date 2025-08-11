import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Option } from './option.entity';
import { CreateOptionDto } from './create-option.dto';
import { Question } from '../question/question.entity';

@Injectable()
export class OptionService {
  constructor(
    @InjectRepository(Option)
    private optionRepository: Repository<Option>,
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
  ) {}
  async createOption(optionData: CreateOptionDto) {
    const question = await this.questionRepository.findOne({
      where: { id: optionData.questionId },
    });

    if (!question) throw new Error('Question not found');

    return await this.optionRepository.save({ ...optionData, question });
  }
}
