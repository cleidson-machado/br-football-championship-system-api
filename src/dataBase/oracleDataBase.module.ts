/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { OracleDataBaseProviders } from './oracleDataBase.providers';

@Module({
  providers: [...OracleDataBaseProviders],
  exports: [...OracleDataBaseProviders],
})
export class oracleDataBaseModule {}

const test = [...OracleDataBaseProviders]; //## INTERESSANTE! TENTAR APLICAR NO COMIT ZOADO.. VER SEDÁ PRA USAR
//NO LUGAR DAS ENTRADAS DAS ENTIDADES / TOKEN NAS MODULES..

console.log(test);
