export class Duck {
  public name: string;
  public nick: string;
  public imagePath: string;
  public description: string;

  constructor(name: string, nick: string, imagePath: string, desctription: string) {
    this.name = name;
    this.nick = nick;
    this.imagePath = imagePath;
    this.description = desctription;
  }
}
