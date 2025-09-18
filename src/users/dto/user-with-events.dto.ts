import { CalendarEventDto } from './calendar-event.dto';

export class UserWithCalendarDto {
  id: number;
  uuid: string;
  email: string;
  name?: string;
  createdAt: Date;
  calendar: CalendarEventDto[];
}
