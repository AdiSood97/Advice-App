import { Component, OnInit } from '@angular/core';
import { AdviceService } from "../_services/index";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  public random_advice: any;
  public search_term: string;
  public search_advice: any;
  public isLoading1: boolean = false;
  public isLoading2: boolean = false;

  constructor(
    private adviceService: AdviceService
    ) { }

  ngOnInit(): void {

  }

  //Get Random Advice
  getRandomAdvice(){
    this.isLoading1 = true;
    return new Promise(async (resolve, reject) => {
      try {
        this.adviceService.getRandomAdvice().subscribe(
      (res) => {
        this.isLoading1 = false;
        this.random_advice = res;
      },
      (error) => {
        console.error(error);
      } );

      // Resolve the promise
      resolve(this.random_advice)

      } catch (error) {

      // Catch the error and reject the promise
      reject({ error: error })
      }
    })
  }

  onSubmit(searchTerm: string) {

    if(searchTerm === ""){
      alert('Please enter some input')
    }

    this.isLoading2 = true;
    
    return new Promise(async (resolve, reject) => {
      try {
        this.adviceService.getSearchAdvice(searchTerm).subscribe(
      (res) => {
        
        this.search_advice = res;
      },
      (error) => {
        console.error(error);
      } );

      this.isLoading2 = false;
      // Resolve the promise
      resolve(this.search_advice)

      } catch (error) {

      // Catch the error and reject the promise
      reject({ error: error })
      }
    })
  }


}
