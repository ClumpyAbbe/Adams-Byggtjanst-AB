import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Project, Tjanster } from 'src/app/model/interfaces';

@Component({
  selector: 'app-hem',
  templateUrl: './hem.component.html',
  styleUrls: ['./hem.component.css']
})

export class HemComponent implements OnInit {

  items: Observable<any>;
  tjantser: Observable<any>;
  constructor(private firestore: AngularFirestore, private modalService: NgbModal) {
    this.items = firestore.collection("Projekt").valueChanges();
    this.tjantser = firestore.collection("Tjanster").valueChanges();
  }

  activeProject: Project;
  projects: Project[];

  tjansterList: Tjanster[] = [
    {
    Titel: "Nybyggnad",
    Beskrivning: "Vi hjälper dig att förverkliga dina nya projekt, oavsett om det handlar om ett nytt lusthus, ettattefallshus, ett förråd eller ett garage. Du kan känna dig i trygga händer även när det kommer till el, måleri eller vs vi har duktiga samarbetspartners som vi gärna förmedlar kontakt med",
    Image: ""
  },
  {
    Titel: "Utbyggnad",
    Beskrivning: "underar du på att bygga ut ditt befintliga hus? Inga problem, ingen byggnad är det andra lik och vi bidrar gärna med vår erfarenhet för att hjälpa dig skapa det bästa resultatet efter dina förutsättningar.",
    Image: ""
  },
  {
    Titel: "Invändig renvovering",
    Beskrivning: "Ska du lägga nytt golv, byta trappsteg, renovera dörrar eller kanske göra om rumsindelningen? Berätta om dina idéer så kan vi vara ditt bollplank och ta fram en lösning som passar just dig. Bara fantasin sätter begränsningen.",
    Image: ""
  },
  {
    Titel: "Utvändig renovering",
    Beskrivning: "När det börjar bli dags att se över husets utvändiga sida finns vi till hands. Vi fixar din fasadrenovering med alltifrån tak, panel till fönster och dörrar.",
    Image: ""
  },
  {
    Titel: "Altan & Uterum",
    Beskrivning: "Önskar du en ny härlig altan? Eller kanske det där mysiga inglasade uterummet? Det spelar ingen roll om du vill bygga ditt projekt från grunden med lösvirke eller om du vill använda dig av färdiga moduler. Vi kan hjälpa dig att uppfylla drömmen på båda sätten.",
    Image: ""
  },
  {
    Titel: "Kök",
    Beskrivning: "Eller hemmets hjärta. För många det viktigaste rummet i huset. Med en sådan betydelsefull plats är det extra viktigt att lägga tid på att komma fram till vad du verkligen vill ha. Men också vad som passar din budget. Vi diskuterar gärna olika möjligheter tillsammans med dig.",
    Image: ""
  }
]


  ngOnInit(): void {
    
  }

  openXl(position: Project, content) {
    this.activeProject = position;
    this.modalService.open(content);
  }

  

}

