/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { OracleDataBaseProviders } from './oracleDataBase.providers';

@Module({
  providers: [...OracleDataBaseProviders],
  exports: [...OracleDataBaseProviders],
})
export class oracleDataBaseModule {}

const providerObject = [...OracleDataBaseProviders]; //JUST TO TEST IF THE DATA BASE CLASS IS WORKING GOOD!

console.log(
  'Connection to ORACLE_DataBase is LOADED by Module Name: ' +
    oracleDataBaseModule.name,
);
console.log(providerObject);
