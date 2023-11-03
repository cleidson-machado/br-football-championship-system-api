/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { OracleDataBaseProviders } from './oracleDataBase.providers';

@Module({
  providers: [...OracleDataBaseProviders],
  exports: [...OracleDataBaseProviders],
})
export class oracleDataBaseModule {}
