import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post, PostService } from '../../services/post-service';
@Component({
  selector: 'app-post-viewer',
  imports: [],
  templateUrl: './post-viewer.html',
  styleUrl: './post-viewer.css',
})
export class PostViewerComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  loading: boolean = false;
  error: string = '';

  private postsSubscription!: Subscription;

  constructor(private postService: PostService) {
    console.log('🎯 PostViewerComponent: Constructor called');
  }

  ngOnInit(): void {
    console.log('🟢 PostViewerComponent: ngOnInit called');
    this.loadPosts();
  }

  loadPosts(): void {
    this.loading = true;
    this.error = '';

    console.log('📥 PostViewerComponent: Starting to load posts...');

    this.postsSubscription = this.postService.getFirstFivePosts().subscribe({
      next: (posts) => {
        console.log('✅ PostViewerComponent: Posts loaded successfully', posts);
        this.posts = posts;
        this.loading = false;
      },
      error: (error) => {
        console.error('❌ PostViewerComponent: Error loading posts', error);
        this.error = `Failed to load posts: ${error.message}`;
        this.loading = false;
        this.posts = [];
      },
      complete: () => {
        console.log('🏁 PostViewerComponent: Posts loading completed');
      },
    });
  }

  reloadPosts(): void {
    console.log('🔄 PostViewerComponent: Reloading posts');
    this.loadPosts();
  }

  ngOnDestroy(): void {
    console.log('🔴 PostViewerComponent: ngOnDestroy called');

    if (this.postsSubscription) {
      console.log('📪 PostViewerComponent: Unsubscribing from posts observable');
      this.postsSubscription.unsubscribe();
    }
  }
}
