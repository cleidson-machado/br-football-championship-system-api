import { Module } from '@nestjs/common';
import { ChampionshipService } from './championship.service';
import { ChampionshipController } from './championship.controller';
import { oracleDataBaseModule } from 'src/dataBase/oracleDataBase.module';
import { ChampionshipProviders } from './championship.providers';
import { ParameterModule } from 'src/core/event-restriction/parameter/parameter.module';

@Module({
  imports: [oracleDataBaseModule, ParameterModule],
  controllers: [ChampionshipController],
  providers: [...ChampionshipProviders, ChampionshipService],
})
export class ChampionshipModule {}
