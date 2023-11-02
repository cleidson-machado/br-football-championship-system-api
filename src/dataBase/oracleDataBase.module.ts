/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { oracleDataBaseProviders } from './oracleDataBase.providers';

@Module({
  providers: [...oracleDataBaseProviders],
  exports: [...oracleDataBaseProviders],
})
export class oracleDataBaseModule {}
