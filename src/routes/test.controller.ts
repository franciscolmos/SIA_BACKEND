import { Controller, Get } from '@nestjs/common';
import { TestService } from '../serrvices/test.service';

@Controller()
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get('/test')
  runProgram(): string {
    return this.testService.runProgram();
  }
}
