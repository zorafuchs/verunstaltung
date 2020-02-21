export class InformationModel {
  title: string;
  text: string;
  pics: string[];

  constructor(title: string, text: string, pics: string[]) {
    this.title = title;
    this.text = text;
    this.pics = pics;
  }
}
