import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatedUserDto } from './dto/created-user.dto';
import axios from 'axios';
import { UserWithCalendarDto } from './dto/user-with-events.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(email: string, name?: string): Promise<CreatedUserDto> {
    return this.prisma.user.create({
      data: { email, name },
    });
  }

  async addHolidaysToCalendar(
    userId: number,
    countryCode: string,
    year: number,
    holidays?: string[],
  ): Promise<UserWithCalendarDto> {
    const response = await axios.get(
      `https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`,
    );
    let publicHolidays: { date: string; localName: string; name: string }[] =
      response.data;

    if (holidays?.length) {
      publicHolidays = publicHolidays.filter((h) => holidays.includes(h.name));
    }

    const createEvents = publicHolidays.map((h) => ({
      userId,
      title: h.name,
      date: new Date(h.date),
    }));

    if (createEvents.length) {
      await this.prisma.calendarEvent.createMany({
        data: createEvents,
        skipDuplicates: true,
      });
    }

    return this.prisma.user.findUnique({
      where: { id: userId },
      include: { calendar: true },
    });
  }
}
