/* eslint-disable prettier/prettier */
import { CreateChampionshipDto } from './dto/create-championship.dto';
import { Championship } from './entities/championship.entity';

export interface IChampionship {
  createAndSaveObject(
    payLoad: CreateChampionshipDto,
  ): Promise<Championship | any | undefined>;
}
