export class Hotel {
  _id: string;
  name: string;
  category: string;
  description?: string;
  isAvaible?: boolean;
  rating: number;
  imagePath: string;
  about: string;

  load(res: any) {
    if (res._id)
      this._id = res._id;

    if (res.name)
      this.name = res.name;

    if (res.category)
      this.category = res.category;

    if (res.description)
      this.description = res.description;

    if (res.isAvaible)
      this.isAvaible = res.isAvaible;

    if (res.rating)
      this.rating = res.rating;

    if (res.imagePath)
      this.imagePath = res.imagePath;

    if(res.about)
      this.about = res.about;
  }
}