import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'URL';


  constructor(private httpClient: HttpClient) { }

  public async getHtmlContent(url: string): Promise<void> {
    console.log(`TARGET URL = ${url}`);
    return new Promise((resolve) => {
      this.httpClient.get(url).subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.log(error);
        }
      });
    });
  }
}
