/*
  Warnings:

  - A unique constraint covering the columns `[userId,title,date]` on the table `CalendarEvent` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CalendarEvent_userId_title_date_key" ON "public"."CalendarEvent"("userId", "title", "date");
