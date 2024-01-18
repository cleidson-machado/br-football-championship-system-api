/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Inject,
  Injectable,
  Logger,
  NotFoundException,
  PreconditionFailedException,
} from '@nestjs/common';
import { CreateChampionshipDto } from './dto/create-championship.dto';
import { UpdateChampionshipDto } from './dto/update-championship.dto';
import { ChampionshipRepository } from './championship.repository';
import { Championship } from './entities/championship.entity';

@Injectable()
export class ChampionshipService {
  private logger = new Logger(ChampionshipService.name);
  constructor(private championshipRepository: ChampionshipRepository) {}

  public async saveOne(payLoad: CreateChampionshipDto) {
    try {
      return this.championshipRepository.saveOne(payLoad);
    } catch (err) {
      throw new PreconditionFailedException(`Was an Error: ${err}`);
    }
  }

  public async getAll(): Promise<CreateChampionshipDto[]> {
    try {
      const championships = await this.championshipRepository.getAll();
      if (championships?.length === 0) {
        throw new Error(
          `There is no data in the database table! NO DATA FOUND!.`,
        );
      }
      return championships;
    } catch (err) {
      this.logger.log(
        `CalendarScopeService:getAll : ${JSON.stringify(err.message)}`,
      );
      throw new NotFoundException(`Was an Error: ${err}`);
    }
  }

  public async getOne(id: string) {
    try {
      const championship = await this.championshipRepository.getOne(id);
      if (!championship) {
        throw new Error(
          `The CALENDAR with ID: ${id} was NOT FOUND on the Database!`,
        );
      }
      return championship;
    } catch (err) {
      this.logger.log(
        `ChampionshipService:getOne : ${JSON.stringify(err.message)}`,
      );
      throw new NotFoundException(`Was an Error: ${err}`);
    }
  }

  public async setOne(
    id: string,
    payLoad: UpdateChampionshipDto,
  ): Promise<Championship> {
    try {
      const championship = await this.getOne(id);
      if (!championship) {
        throw new Error(
          `The CHAMPIONSHIP with ID: ${id} was NOT FOUND on the Database!`,
        );
      } else {
        await this.championshipRepository.setOne(id, payLoad);
        return await this.getOne(id);
      }
    } catch (err) {
      this.logger.log(
        `ChampionshipService:getOne : ${JSON.stringify(err.message)}`,
      );
      throw new NotFoundException(`Was an Error: ${err}`);
    }
  }

  public async deleteOne(id: string) {
    try {
      const calendar = await this.getOne(id);
      if (!calendar) {
        throw new Error(
          `The CALENDAR with ID: ${id} was NOT FOUND on the Database!`,
        );
      } else {
        await this.championshipRepository.deleteOne(id);
        return { code: 200, message: 'OK Removed!' };
      }
    } catch (err) {
      this.logger.log(
        `ParameterService:deleteOne : ${JSON.stringify(err.message)}`,
      );
      throw new PreconditionFailedException(`Was an Error: ${err}`);
    }
  }
}
