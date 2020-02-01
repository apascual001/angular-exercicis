import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WpService {
// URL del blog que vamos a trabajar con su REST API
public URL = 'https://angular-bootstrap.dev.cc/';
public API = `${this.URL}wp-json/wp/v2/posts`;

constructor(private http: HttpClient) { }

/**
   * Numero de post que quieres mostrar
   * @param id
   */  
  getAll(id: number) {
    return this.http.get(`${this.API}?_embed&per_page=${id}`);
  }

  /**
   * Slug del post que vamos a mostrar
   * @param id
   */
  getSinglePost(id: string) {
    return this.http.get(`${this.API}?_embed&slug=${id}`);
  }

}