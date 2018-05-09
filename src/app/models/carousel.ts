export class Carousel {
  id: string;
  imagePath: string[] = [];

  load(res: any){
    if(res.id)
      this.id = res.id;

    if(res.imagePath)
      this.imagePath = res.imagePath;
  }
}