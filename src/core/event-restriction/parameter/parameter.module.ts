import { Module } from '@nestjs/common';
import { ParameterService } from './parameter.service';
import { ParameterController } from './parameter.controller';
import { oracleDataBaseModule } from 'src/dataBase/oracleDataBase.module';
import { ParameterProviders } from './parameter.providers';
import { ParameterRepository } from './parameter.repository';

@Module({
  imports: [oracleDataBaseModule],
  controllers: [ParameterController],
  providers: [ParameterService, ...ParameterProviders, ParameterRepository],
})
export class ParameterModule {}
