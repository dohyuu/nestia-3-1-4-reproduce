import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { TypedRoute } from '@nestia/core';

@Controller('/')
export class AppController {
  constructor(private appService: AppService) {}

  @TypedRoute.Get()
  get() {
    return [];
  }
}
