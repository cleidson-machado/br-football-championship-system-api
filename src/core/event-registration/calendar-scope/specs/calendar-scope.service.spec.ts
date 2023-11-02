import { Test, TestingModule } from '@nestjs/testing';
import { CalendarScopeService } from '../calendar-scope.service';

describe('CalendarScopeService', () => {
  let service: CalendarScopeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalendarScopeService],
    }).compile();

    service = module.get<CalendarScopeService>(CalendarScopeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
