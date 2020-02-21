export class EventModel {
  date: string;
  doors: string;
  pics: string[];

  constructor(date: string, doors: string, pics: string[]) {
    this.date = date;
    this.doors = doors;
    this.pics = pics;
  }
}
