import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    'You\'ve got mail',
    'Luca liked your photo',
    'Bla bla bla'
  ];
  constructor() { }

}
