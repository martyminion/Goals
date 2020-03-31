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
export const GOALS:Goal[]=[
  new Goal(1,'Watch Finding Nemo','Find an online version',new Date(2020,3,14)),
  new Goal(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2017,3,14)),
  new Goal(3,'Get new Phone Case','Diana has her birthday coming up soon',new Date(2020,10,14)),
  new Goal(4,'Get Dog Food','Pupper likes expensive snacks',new Date(2020,3,21)),
  new Goal(5,'Solve math homework','Damn Math',new Date(2020,3,14)),
  new Goal(6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2025,3,14)),

];
