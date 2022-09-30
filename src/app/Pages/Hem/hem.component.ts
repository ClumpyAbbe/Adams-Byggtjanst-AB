import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hem',
  templateUrl: './hem.component.html',
  styleUrls: ['./hem.component.css']
})

export class HemComponent implements OnInit {
  

  UtvaldaProjekt: Array<string> = ['ALTAN & UTERUM', 'BADRUM','INVÄNDIG RENOVERING','KÖK','PLATSBYGGDA MÖBLER','SPECIALPROJEKT','TRAPPOR','UTBYGGNAD OCH NYBYGGNAD','UTVÄNDIG RENOVERING'];
  projectPicture: string = "/assets/Projekt/ALTAN & UTERUM/1/1.jpg";
  counter: number = 0;
  activeProject: string = "ALTAN & UTERUM"
  imageName: any =
  
    "/assets/ex" + this.counter +".jpg";
  numberOfPictures: number = 2;
  constructor() { 
  }

  ngOnInit(): void {
  }

  chooseProject(project:string)
  {
    this.activeProject = project;
    this.projectPicture = "/assets/Projekt/" + project +'/1/1.jpg';
  }

  nextPicture(position: number)
  {
    
    if(position == 0){
      this.counter++;
      if(this.counter == this.numberOfPictures){
        this.counter = 0;
      }
    }
    else{
      if(this.counter > 0)
      {
        this.counter--;
      }
      else{
        this.counter = this.numberOfPictures-1;
      }
    }
    
    this.imageName = "/assets/ex" + this.counter +".jpg";
  }

    

}
