import { Body, Controller, Param, ParseIntPipe, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AddHolidaysDto } from './dto/add-holiday.dto';
import { UserWithCalendarDto } from './dto/user-with-events.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  async createUser(@Body() body: CreateUserDto) {
    return this.usersService.createUser(body.email, body.name);
  }

  @Post(':userId/calendar/holidays')
  async addHolidays(
    @Param('userId', ParseIntPipe) userId: number,
    @Body() body: AddHolidaysDto,
  ): Promise<UserWithCalendarDto> {
    return this.usersService.addHolidaysToCalendar(
      userId,
      body.countryCode,
      body.year,
      body.holidays,
    );
  }
}
