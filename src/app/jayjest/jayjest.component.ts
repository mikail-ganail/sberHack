import { Component } from '@angular/core';
import { DajestService } from '../dajest.service';

@Component({
  selector: 'app-jayjest',
  templateUrl: './jayjest.component.html',
  styleUrls: ['./jayjest.component.scss'],
})
export class JayjestComponent {
  constructor(public dajustService: DajestService) {}

  ngOnInit() {
    this.dajustService.getDajests();
  }

  update() {
    this.dajustService.getDajests()
  }
}
