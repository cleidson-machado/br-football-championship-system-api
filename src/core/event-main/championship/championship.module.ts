import { Module } from '@nestjs/common';
import { ChampionshipService } from './championship.service';
import { ChampionshipController } from './championship.controller';
import { oracleDataBaseModule } from 'src/dataBase/oracleDataBase.module';
import { ChampionshipProviders } from './championship.providers';
import { ParameterModule } from 'src/core/event-restriction/parameter/parameter.module';
import { ParameterService } from 'src/core/event-restriction/parameter/parameter.service';
import { ParameterProviders } from 'src/core/event-restriction/parameter/parameter.providers';

@Module({
  imports: [oracleDataBaseModule, ParameterModule],
  controllers: [ChampionshipController],
  providers: [
    ...ChampionshipProviders,
    ChampionshipService,
    ...ParameterProviders,
    ParameterService,
  ],
})
export class ChampionshipModule {}
