import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { events } from 'src/shared/constants/event.constants';
import { ResponseAddEvent } from 'src/shared/events/response-add.events';

@Injectable()
export class ResponseService {
  @OnEvent(events.RESPONSE_SUBMITTED)
  handleIfResponseIsCorrect(payload: ResponseAddEvent) {
    console.log('handleIfResponseIsCorrect', payload);
  }
}
