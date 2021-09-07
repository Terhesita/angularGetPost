import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  name: String = ''

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  postData(){

    let url = 'https://my-json-server.typicode.com/Terhesita/ClienteJson';

    this.http.post(url, {
      name: this.name
    }).toPromise().then((data: any) => {
      console.log(data)
    })
  }

}
