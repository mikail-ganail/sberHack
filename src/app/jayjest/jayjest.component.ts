import { Component } from '@angular/core';
import { DajestService } from '../dajest.service';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-jayjest',
  templateUrl: './jayjest.component.html',
  styleUrls: ['./jayjest.component.scss'],
})
export class JayjestComponent {
  constructor(public dajustService: DajestService) {}
  position: string = 'Бэкендер';
  iconn = faDownload;

  ngOnInit() {
    this.dajustService.getDajests(this.position);
  }

  update() {
    this.startLoading()
    console.log(this.position);
    //this.dajustService.getDajests(this.position);
  }

  getIcon() {
    if (this.position === 'Бэкендер') {
      return '../../assets/data/image/back.jpg';
    } else if (this.position === 'Инженер') {
      return '../../assets/data/image/ingener.jpg';
    } else if (this.position === 'Нефтяник') {
      return '../../assets/data/image/neft.jpg';
    } else {
      return '../../assets/data/image/ofis.jpg';
    }
  }

  isLoading = false;

  startLoading() {
    if (this.isLoading) return; // Не позволяйте начинать снова во время загрузки
    this.isLoading = true;

    // Завершите загрузку через 8 секунд
    setTimeout(() => {
      this.isLoading = false;
    }, 8000);
  }
}
