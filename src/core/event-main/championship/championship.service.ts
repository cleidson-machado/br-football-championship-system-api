/* eslint-disable @typescript-eslint/no-unused-vars */
import { Inject, Injectable } from '@nestjs/common';
import { CreateChampionshipDto } from './dto/create-championship.dto';
import { UpdateChampionshipDto } from './dto/update-championship.dto';
import { Repository } from 'typeorm';
import { Championship } from './entities/championship.entity';
import { ParameterService } from 'src/core/event-restriction/parameter/parameter.service';

@Injectable()
export class ChampionshipService {
  constructor(
    @Inject('CHAMPIONSHIP_REPOSITORY')
    private championshipRepository: Repository<Championship>,

    private readonly parametro: ParameterService,
  ) {}

  create(payLoad: CreateChampionshipDto) {
    return this.championshipRepository.save(payLoad);
  }

  findAll() {
    return this.championshipRepository.find({
      relations: { calendarScopes: true },
    });
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
