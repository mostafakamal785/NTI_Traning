import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
    console.log('🛠️ PostService initialized');
  }

  getPosts(): Observable<Post[]> {
    console.log('🌐 PostService: Making HTTP GET request to API');
    return this.http.get<Post[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  getFirstFivePosts(): Observable<Post[]> {
    console.log('🌐 PostService: Getting first 5 posts from API');
    return this.http.get<Post[]>(this.apiUrl).pipe(
      map((posts) => posts.slice(0, 5)),
      catchError(this.handleError)
    );
  }

  getPostById(id: number): Observable<Post> {
    console.log(`🌐 PostService: Getting post with ID ${id}`);
    return this.http.get<Post>(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('❌ PostService: HTTP request failed', error);

    let errorMessage = 'Unknown error occurred';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client Error: ${error.error.message}`;
    } else {
      errorMessage = `Server Error: ${error.status} - ${error.message}`;
    }

    return throwError(() => new Error(errorMessage));
  }
}
