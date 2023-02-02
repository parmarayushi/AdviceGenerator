import { Component } from '@angular/core';
import { AdviceGeneratorService } from './advice-generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public data: any;
  constructor(private _adviceGeneratorService: AdviceGeneratorService) {
    this._adviceGeneratorService.getAdvice().subscribe((res) => this.data = res);
  }

  public getData() {
    this._adviceGeneratorService.getAdvice().subscribe((res) => this.data = res);
  }
}
