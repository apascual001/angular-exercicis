import { Component, OnInit } from '@angular/core';
import { WprestNoAuthService } from '../shared/wprest-no-auth.service';
import { DynamicGlobalsService } from '../shared/dynamic-globals.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts;
  currentPage : number = 1;

  constructor(
    public dynamicGlobals: DynamicGlobalsService,
    private wprestNoAuthSrv: WprestNoAuthService) { }

    ngOnInit(){
      this.listPosts();
    }
    // List posts starting at page one
  listPosts(){
    this.wprestNoAuthSrv.getPosts(this.currentPage).subscribe((data)=>{
      
      console.log('Total results: '+data.headers.get('x-wp-total'));
      console.log('Total pages: '+data.headers.get('x-wp-totalpages'));


      // Initialize posts or concatenate existing results
      if(1 == this.currentPage){
        this.posts = data.body;
      }else{
        this.posts = this.posts.concat(data.body);
      }

    });
  }

}
