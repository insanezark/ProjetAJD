import { Component, input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
//import { AppService } from '../service/app.service';
import { Sneakers } from './Sneakers';
import { SneakersService } from '../sneakers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'achat-root',
  templateUrl: './achat.component.html'
})


export class AchatComponent implements OnInit {
  title = 'ACHETER';
  contenu = 'Vendez dès maintenant votre paire en remplissant le formulaire ci dessous : '
  contenu2 = 'Si vous préférez vendre une paire cliquez sur ce bouton'

  sneakers: Sneakers[];

  constructor(private sneakersService: SneakersService){}

  getSneakers(): void {
  	this.sneakersService.getAllSneakers();
  }

  ngOnInit(){
  	var data = this.sneakersService.getAllSneakers()
  	.subscribe(res=>{
  		this.sneakers=res;
  		console.log(this.sneakers)
  		console.log(this.sneakers[0].id)
  		console.log(this.sneakers[1].id)
  	});

  }

  getSneakers(marque): void{
  	this.sneakersService.getSneakers(marque).subscribe(res=>{
  		this.sneakers=res;
  		console.log(this.sneakers)
 
  	});
  }

  getAllSneakers(): void{
  	this.sneakersService.getAllSneakers().subscribe(res=>{
  		this.sneakers=res;
  		console.log(this.sneakers)
 
  	});
  }


  //ngOnInit(): void{
  //this.SneakersService.getAllSneakers();
  //}

}  

