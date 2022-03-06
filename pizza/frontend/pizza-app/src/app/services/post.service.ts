import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../posts/post.model";


@Injectable()
export class PostService {

  http: HttpClient;
  URL: string = "https://jsonplaceholder.typicode.com/posts"
  //x: Observable<Post[]> = null;
  
  constructor(http: HttpClient) {
    this.http = http;
  }
  // HTTP Request & Response - Header + body
  public getAllPosts(): void{
    let x: Observable<Post[]>;
    x = this.http.get<Post[]>(this.URL);
    x.subscribe((data) => {console.log(data); },
                      (error) =>{console.log(error); },
                        () => {console.log("No Further Data")}
                    );
  }
  public addViewPosts(){

    }
    //responce = {}
  public getPostById(id: number){
    console.log("post id=", id);
    let observable: Observable<Post>;
    //"https://jsonplaceholder.typicode.com/posts/2"
    let newURL = `${this.URL}/${id}`;
    observable = this.http.get<Post>(newURL);
    observable.subscribe((responce)=>{console.log(responce)},
    (error)=>{console.log(error)})
  }
}