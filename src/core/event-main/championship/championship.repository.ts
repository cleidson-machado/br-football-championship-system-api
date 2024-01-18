/* eslint-disable prettier/prettier */
import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Championship } from './entities/championship.entity';
import { IChampionship } from './championship.interface';
import { CreateChampionshipDto } from './dto/create-championship.dto';
import { UpdateChampionshipDto } from './dto/update-championship.dto';

export class ChampionshipRepository
  extends Repository<Championship>
  implements IChampionship<Championship>
{
  constructor(
    @Inject('CHAMPIONSHIP_REPOSITORY')
    private customRepository: Repository<Championship>,
  ) {
    super(
      customRepository.target,
      customRepository.manager,
      customRepository.queryRunner,
    );
  }

  public async saveOne(payLoad: CreateChampionshipDto) {
    const newChampionship = this.create(payLoad);
    return await this.save(newChampionship);
  }

  public async getAll(): Promise<Championship[]> {
    return await this.find({
      relations: { calendarScopes: true },
    });
  }

  public async getOne(id: string): Promise<Championship | null> {
    return await this.findOne({
      where: { idChamp: id },
    });
  }

  public async setOne(
    id: string,
    payLoad: UpdateChampionshipDto,
  ): Promise<void> {
    await this.update({ idChamp: id }, payLoad);
  }

  public async deleteOne(id: string): Promise<void> {
    await this.delete({ idChamp: id });
  }
}
