import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {

  adatok: any[] = [];
  adatokFejlec: any[] = ['creator', 'name']

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get('https://infra-hulling-376212-default-rtdb.europe-west1.firebasedatabase.app/plushies.json')
                .pipe(
                  map( (mappelni) =>{
                let ujAdatok: any[] = [];

    Object.entries(mappelni).forEach( ([kulcs, ertek]) => {ujAdatok.push(ertek)} );
    ujAdatok.sort((a,b) => (a.name > b.name)? 1 : -1 ); 

                    console.log(ujAdatok);
                return ujAdatok;
                    })
)
          .subscribe( (adatoklejottek: any[]) => {
this.adatok = adatoklejottek;
})

  }

}


















