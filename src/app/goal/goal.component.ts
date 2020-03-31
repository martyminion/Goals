import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal'
import { GoalService } from '../goal-service/goal.service'
import { GOALS} from '../goal'
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})

export class GoalComponent implements OnInit {

  goals:Goal[];

  constructor( private goalService:GoalService) {
    this.getGoals()
  }
  getGoals(): void{
    this.goals = this.goalService.getGoals()
  }

  
  
  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription
  }

  // completeGoal(isComplete, index){
  //   if(isComplete){
  //     this.goals.splice(index,1)
  //   }
  // }
  deleteGoal(isComplete, index){
    if(isComplete){
      let toDelete = confirm(`Are you sure yo want to delete ${this.goals[index].name}?`)
      if(toDelete){
        this.goals.splice(index,1)
      }
    }
  }

  


  ngOnInit(): void {
  }

  
}
