import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/health')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/error')
  launchError(): string {
    throw new Error('Erro na aplicação');
    return 'OK';
  }

  @Get('/private')
  privatePath(): string {
    return 'OK';
  }
}
