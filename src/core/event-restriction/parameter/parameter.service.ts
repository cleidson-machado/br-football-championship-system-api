/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Inject,
  Injectable,
  PreconditionFailedException,
} from '@nestjs/common';
import { CreateParameterDto } from './dto/create-parameter.dto';
import { UpdateParameterDto } from './dto/update-parameter.dto';
import { Repository } from 'typeorm';
import { Parameter } from './entities/parameter.entity';
import { IParameter } from './parameter.interface';

@Injectable()
export class ParameterService implements IParameter<Parameter> {
  constructor(
    @Inject('PARAMETER_REPOSITORY')
    private parameterRepository: Repository<Parameter>,
  ) {}

  public async create(payLoad: CreateParameterDto) {
    try {
      const entityObjectInMemory = this.parameterRepository.create(payLoad);
      return await this.parameterRepository.save(entityObjectInMemory);
    } catch (err) {
      throw new PreconditionFailedException(`Was an Error: ${err}`);
    }
  }

  public async findAll() {
    return await this.parameterRepository.find();
  }

  public async findOne(id: string): Promise<Parameter> {
    return await this.parameterRepository.findOne({
      where: { idParameter: id },
    });
  }

  public async update(
    id: string,
    payLoad: UpdateParameterDto,
  ): Promise<Parameter> {
    await this.parameterRepository.update({ idParameter: id }, payLoad);
    return null;
  }

  public async remove(id: string): Promise<Parameter> {
    await this.parameterRepository.delete({ idParameter: id });
    return null;
  }
}
