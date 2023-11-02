import { Test, TestingModule } from '@nestjs/testing';
import { CalendarScopeController } from './calendar-scope.controller';
import { CalendarScopeService } from './calendar-scope.service';

describe('CalendarScopeController', () => {
  let controller: CalendarScopeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalendarScopeController],
      providers: [CalendarScopeService],
    }).compile();

    controller = module.get<CalendarScopeController>(CalendarScopeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
