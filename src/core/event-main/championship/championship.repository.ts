/* eslint-disable prettier/prettier */
import { Repository } from 'typeorm';
import { Championship } from './entities/championship.entity';
import { IChampionship } from './championship.interface';
import { CreateChampionshipDto } from './dto/create-championship.dto';

export class ChampionshipRepository
  extends Repository<Championship>
  implements IChampionship
{
  public async createAndSaveObject(
    payLoad: CreateChampionshipDto,
  ): Promise<Championship | any | undefined> {
    const objectFromPayload = this.create(payLoad);
    return this.save(objectFromPayload);
  }
}
