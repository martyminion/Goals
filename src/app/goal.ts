//simple example of a class used to create an object
// export class Goal {
//   id: number;
//   name: string;
//   description: string;
// }

//output property binding
export class Goal{
  showDescription: boolean;
  constructor( public id: number, public name: string, public description: string, public completeDate: Date)
  { this.showDescription = false;

  }
}
