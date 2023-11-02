import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChampionshipModule } from './core/event-main/championship/championship.module';
import { CalendarScopeModule } from './core/event-registration/calendar-scope/calendar-scope.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { oracleDataSourceOptionsConfiguration } from './dataBase/oracleDataSourceOptions.configuration';

@Module({
  imports: [
    ChampionshipModule,
    CalendarScopeModule,
    TypeOrmModule.forRoot(oracleDataSourceOptionsConfiguration),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
