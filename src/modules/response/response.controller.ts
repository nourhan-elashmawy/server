import { Controller, Post } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { ApiTags } from '@nestjs/swagger';
import { events } from 'src/shared/constants/event.constants';
import { ResponseAddEvent } from 'src/shared/events/response-add.events';

@Controller('/response')
@ApiTags('Response')
export class ResponseController {
  constructor(private eventEmitter: EventEmitter2) {}

  @Post('')
  handleQuestionResponse() {
    // logic to insert data into the response table
    console.log('This is inside the controller');

    const payload = new ResponseAddEvent();
    payload.userId = 1;
    payload.optionId = 4;

    this.eventEmitter.emit(events.RESPONSE_SUBMITTED, payload);

    return { message: 'Response taken' };
  }
}
