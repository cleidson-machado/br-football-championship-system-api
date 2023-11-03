/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ChampionshipService } from './championship.service';
import { ChampionshipController } from './championship.controller';
import { oracleDataBaseModule } from 'src/dataBase/oracleDataBase.module';
import { championshipProviders } from './championship.providers';

@Module({
  imports: [oracleDataBaseModule],
  controllers: [ChampionshipController],
  providers: [...championshipProviders, ChampionshipService],
})
export class ChampionshipModule {}
