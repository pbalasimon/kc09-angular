import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from 'rxjs/Observable';

import { Post } from './post';
import { PostService } from './post.service';

@Injectable()
export class PostsResolveService implements Resolve<Post[]> {

  constructor(private _postService: PostService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Post[]> {

    /*-----------------------------------------------------------------------------------------|
     | ~~~ Red Path ~~~                                                                        |
     |-----------------------------------------------------------------------------------------|
     | Modifica este Resolve para que, en caso de tener que obtener los posts correspondientes |
     | a un usuario, llame a la función 'getUserPosts()' del servicio PostService. Recuerda    |
     | mirar en los parámetros de la ruta, a ver qué encuentras.                               |
     |-----------------------------------------------------------------------------------------*/

    /*-----------------------------------------------------------------------------------------|
     | ~~~ Yellow Path ~~~                                                                     |
     |-----------------------------------------------------------------------------------------|
     | Modifica este Resolve para que, en caso de tener que obtener los posts correspondientes |
     | a una categoría, llame a la función 'getCategoryPosts()' del servicio PostService.      |
     | Recuerda mirar en los parámetros de la ruta, a ver qué encuentras.                      |
     |-----------------------------------------------------------------------------------------*/

    let params = route.params;

    if (params.hasOwnProperty("userId") && !params.hasOwnProperty("categoryId")) {
      return this._postService.getUserPosts(params.userId);
    } else {
      return this._postService.getPosts();
    }
  }

}
