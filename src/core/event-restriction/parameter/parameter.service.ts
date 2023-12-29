/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Injectable,
  Logger,
  NotFoundException,
  PreconditionFailedException,
} from '@nestjs/common';
import { CreateParameterDto } from './dto/create-parameter.dto';
import { UpdateParameterDto } from './dto/update-parameter.dto';
import { Parameter } from './entities/parameter.entity';
import { ParameterRepository } from './parameter.repository';

@Injectable()
export class ParameterService {
  private logger = new Logger(ParameterService.name);
  constructor(private parameterRepository: ParameterRepository) {}

  public async saveOne(payLoad: CreateParameterDto) {
    try {
      return await this.parameterRepository.saveOne(payLoad);
    } catch (err) {
      throw new PreconditionFailedException(`Was an Error: ${err}`);
    }
  }

  public async getAll(): Promise<CreateParameterDto[]> {
    try {
      const parameter = await this.parameterRepository.getAll();
      if (parameter?.length === 0) {
        throw new Error(
          `There is no data in the database table! NO DATA FOUND!.`,
        );
      }
      return parameter;
    } catch (err) {
      this.logger.log(
        `ParameterService:getAll : ${JSON.stringify(err.message)}`,
      );
      throw new NotFoundException(`Was an Error: ${err}`);
    }
  }

  public async getOne(id: string): Promise<Parameter | null> {
    try {
      const parameter = await this.parameterRepository.getOne(id);
      if (!parameter) {
        throw new Error(
          `The PARAMETRO with ID: ${id} was NOT FOUND on the Database!`,
        );
      }
      return parameter;
    } catch (err) {
      this.logger.log(
        `ParameterService:getOne : ${JSON.stringify(err.message)}`,
      );
      throw new NotFoundException(`Was an Error: ${err}`);
    }
  }

  public async setOne(
    id: string,
    payLoad: UpdateParameterDto,
  ): Promise<Parameter> {
    try {
      const parameter = await this.getOne(id);
      if (!parameter) {
        throw new Error(
          `The History with ID: ${id} was NOT FOUND on the Database!`,
        );
      } else {
        await this.parameterRepository.setOne(id, payLoad);
        return await this.getOne(id);
      }
    } catch (err) {
      this.logger.log(
        `ParameterService:setOne : ${JSON.stringify(err.message)}`,
      );
      throw new NotFoundException(`Was an Error: ${err}`);
    }
  }

  public async deleteOne(id: string): Promise<any> {
    try {
      const parameter = await this.getOne(id);
      if (!parameter) {
        throw new Error(
          `The History with ID: ${id} was NOT FOUND on the Database!`,
        );
      } else {
        await this.parameterRepository.deleteOne(id);
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
