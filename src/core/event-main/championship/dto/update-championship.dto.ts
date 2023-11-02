import { PartialType } from '@nestjs/mapped-types';
import { CreateChampionshipDto } from './create-championship.dto';

export class UpdateChampionshipDto extends PartialType(CreateChampionshipDto) {
  name: string;

  startDay: Date;

  locationState: string;

  locationCity: string;

  categoryAgeType: string;

  basicBiologicalGender: string;

  competitionModality: string;

  competitionFormat: string;

  teamSize: number;

  groupSize: number;

  finalStageType: string;
}
