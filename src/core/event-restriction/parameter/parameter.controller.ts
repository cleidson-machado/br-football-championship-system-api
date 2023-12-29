/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ParameterService } from './parameter.service';
import { CreateParameterDto } from './dto/create-parameter.dto';
import { UpdateParameterDto } from './dto/update-parameter.dto';

@Controller('parameter')
export class ParameterController {
  constructor(private readonly parameterService: ParameterService) {}

  @Post()
  create(@Body() createParameterDto: CreateParameterDto) {
    return this.parameterService.saveOne(createParameterDto);
  }

  @Get()
  findAll() {
    return this.parameterService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parameterService.getOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateParameterDto: UpdateParameterDto,
  ) {
    return this.parameterService.setOne(id, updateParameterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parameterService.deleteOne(id);
  }
}
