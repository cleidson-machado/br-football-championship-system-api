import { Module } from '@nestjs/common';
import { ChampionshipService } from './championship.service';
import { ChampionshipController } from './championship.controller';
import { oracleDataBaseModule } from 'src/dataBase/oracleDataBase.module';
import { ChampionshipProviders } from './championship.providers';

@Module({
  imports: [oracleDataBaseModule],
  controllers: [ChampionshipController],
  providers: [...ChampionshipProviders, ChampionshipService],
})
export class ChampionshipModule {}
