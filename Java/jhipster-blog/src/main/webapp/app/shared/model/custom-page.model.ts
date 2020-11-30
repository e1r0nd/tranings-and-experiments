export interface ICustomPage {
  id?: number;
  title?: string;
  link?: string;
  content?: string;
}

export class CustomPage implements ICustomPage {
  constructor(public id?: number, public title?: string, public link?: string, public content?: string) {}
}
