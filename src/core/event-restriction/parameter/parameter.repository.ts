/* eslint-disable prettier/prettier */
import { Repository } from 'typeorm';
import { Parameter } from './entities/parameter.entity';
import { Inject, Injectable } from '@nestjs/common';
import { IParameter } from './parameter.interface';
import { CreateParameterDto } from './dto/create-parameter.dto';
import { UpdateParameterDto } from './dto/update-parameter.dto';

@Injectable()
export class ParameterRepository
  extends Repository<Parameter>
  implements IParameter<Parameter>
{
  constructor(
    @Inject('PARAMETER_REPOSITORY')
    private customRepository: Repository<Parameter>,
  ) {
    super(
      customRepository.target,
      customRepository.manager,
      customRepository.queryRunner,
    );
  }

  public async saveOne(payLoad: CreateParameterDto) {
    const newParameter = this.create(payLoad);
    return await this.save(newParameter);
  }

  public async getAll(): Promise<Parameter[]> {
    return await this.find();
  }

  public async getOne(id: string): Promise<Parameter | null> {
    return await this.findOne({
      where: { idParameter: id },
    });
  }

  public async setOne(id: string, payLoad: UpdateParameterDto): Promise<void> {
    await this.update({ idParameter: id }, payLoad);
  }

  public async deleteOne(id: string): Promise<void> {
    await this.delete({ idParameter: id });
  }
}
