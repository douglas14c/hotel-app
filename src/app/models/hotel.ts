export class Hotel {
  _id: string;
  name: string;
  category: string;
  details?: string;
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

    if (res.details)
      this.details = res.details;

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