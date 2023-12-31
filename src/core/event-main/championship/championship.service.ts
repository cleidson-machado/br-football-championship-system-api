import { Inject, Injectable } from '@nestjs/common';
import { CreateChampionshipDto } from './dto/create-championship.dto';
import { UpdateChampionshipDto } from './dto/update-championship.dto';
import { Repository } from 'typeorm';
import { Championship } from './entities/championship.entity';

@Injectable()
export class ChampionshipService {
  constructor(
    @Inject('CHAMPIONSHIP_REPOSITORY')
    private championshipRepository: Repository<Championship>,
  ) {}

  create(createChampionshipDto: CreateChampionshipDto) {
    return this.championshipRepository.save(createChampionshipDto);
  }

  findAll() {
    return `This action returns all championship`;
  }

  findOne(id: number) {
    return `This action returns a #${id} championship`;
  }

  update(id: number, updateChampionshipDto: UpdateChampionshipDto) {
    return `This action updates a #${id} championship`;
  }

  remove(id: number) {
    return `This action removes a #${id} championship`;
  }
}
