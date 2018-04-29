import { Component } from '@angular/core';
import { Component, input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Sneakers } from './Sneakers';
import { SneakersService } from '../sneakers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'qui-root',
  templateUrl: './qui.component.html'
})
export class QuiComponent {
  title = 'Qui sommes nous ?';
}