import { Module } from '@nestjs/common';
import { ChampionshipService } from './championship.service';
import { ChampionshipController } from './championship.controller';
import { oracleDataBaseModule } from 'src/dataBase/oracleDataBase.module';
import { championshipProviders } from './championship.providers';
import { TypeOrmExModule } from 'src/architecture/typeorm-ex.module';
import { Championship } from './entities/championship.entity';

@Module({
  imports: [
    oracleDataBaseModule,
    TypeOrmExModule.forCustomRepository([Championship]),
  ],
  controllers: [ChampionshipController],
  providers: [...championshipProviders, ChampionshipService],
})
export class ChampionshipModule {}
