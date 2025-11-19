import { Component } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  isLoaderActive: boolean = false;
  constructor(public loader: LoaderService) {
    this.loader.isLoading$.subscribe((res: boolean) => this.isLoaderActive = res);
  }

}
