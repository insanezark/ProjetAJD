import { Component } from '@angular/core';
//import { AppService } from '../service/app.service';

import { SneakersService } from './Sneakers.service';
import { Sneakers } from './Sneakers';

@Component({
  selector: 'vente-app',
  templateUrl: './vente.component.html'
})

export class VenteComponent {
  title = 'VENDEZ VOTRE PAIRE';
  contenu = 'Bienvenue sur le site de SNEAKERSELL, vous pouvez acheter et vendre vos chaussures de collection sur cette plateforme en toute sécurité grâce à la vérification de nos experts !';
  allSneakers: Sneakers[];
  //basketList: any;

	//constructor(private appService : AppService){
	//}

	//ngOnInit(){
	//	this.basketList = this.appService.getData();
	 //		console.log(this.basketList);
	//}

	//constructor(private sneakersService: sneakers) {
  // }



	getAllSneakers() {
        this.SneakersService.getAllSneakers()
	   .subscribe(
                data => this.allSneakers = data
            }

}


