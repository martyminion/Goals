import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal'
import { GoalService } from '../goal-service/goal.service'
import { AlertService } from '../alert-service/alert.service'
import { QuoteRequestService } from '../quote-http/quote-request.service'
//import { HttpClient} from '@angular/common/http'
import { Qote } from '../quote-class/qote';
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})

export class GoalComponent implements OnInit {

  goals:Goal[];
  alertService:AlertService;
  quotes:Qote


  constructor(private goalService:GoalService, alertService:AlertService, private quoteService:QuoteRequestService) {
    this.alertService = alertService;
    this.getGoals()
  }
  getGoals(): void{
    this.goals = this.goalService.getGoals()
  }

  ngOnInit(){
   
    this.quoteService.quoteRequest()
    this.quotes = this.quoteService.quote

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
        this.alertService.alertMe("The goal has been deleted")
      }
    }
  }

  


  

  
}
