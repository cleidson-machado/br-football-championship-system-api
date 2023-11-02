import { PartialType } from '@nestjs/mapped-types';
import { CreateCalendarScopeDto } from './create-calendar-scope.dto';

export class UpdateCalendarScopeDto extends PartialType(CreateCalendarScopeDto) {}
