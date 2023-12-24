import { PartialType } from '@nestjs/mapped-types';
import { CreateParameterDto } from './create-parameter.dto';

export class UpdateParameterDto extends PartialType(CreateParameterDto) {
  name: string;

  description: string;

  onAction: string;

  //isActive?: number;

  //itIsTemporary?: number;

  //dueDaysNumber?: number;

  //pointValue?: number;

  //applyToAllWithTheSameType?: string;

  //mathAction?: string;

  //created_at?: Date;

  //updated_at?: Date;

  entityIdentificatorId: string;
}
