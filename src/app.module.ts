import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChampionshipModule } from './core/event-main/championship/championship.module';
import { CalendarScopeModule } from './core/event-registration/calendar-scope/calendar-scope.module';
import { ConfigModule } from '@nestjs/config';
import { ParameterModule } from './core/event-restriction/parameter/parameter.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
    ChampionshipModule,
    CalendarScopeModule,
    ParameterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
