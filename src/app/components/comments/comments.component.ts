import { Component, Input, OnInit, SchemaMetadata } from '@angular/core';
import { ActiveCommentModel } from '../../models/ActiveCommentModel';
import { ActiveCommentType } from '../../models/ActiveCommentType.enum';
import { CommentModel } from '../../models/CommentModel';
import { CommentService } from '../../services/comment.service';
import { User } from '../../shared/services/user';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  user!: User;

  @Input() movieId!: string;
 

  comments: CommentModel[] = [];
  activeComment: ActiveCommentModel | null = null;

  constructor(private CommentService: CommentService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);

    //HerHenterJegComment
    this.CommentService.getComments(this.movieId).subscribe((comments) => {
      this.comments = comments;
      console.info(this.comments);
    });

  
  }

  ngOnChanges() {
    if (this.movieId !== null) { console.log(this.movieId) }
  }

  addComment({ text, parentId }: { text: string, parentId : null|string }): void {
    //her gemmer jeg på databasen
    this.CommentService.createComment(text, parentId, this.movieId, this.user.email).subscribe(createdComment => {
      this.comments = [...this.comments, createdComment]
      this.activeComment = null;
    });
  }

  getReplies(id: string): CommentModel[] {
    return this.comments.filter(comment => comment.parentId === id).sort((a, b) =>
      new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
  }

  getRootComments(): CommentModel[] {
    return this.comments.filter((comment) => comment.parentId === null);
  }

  setActiveComment(activeComment: ActiveCommentModel | null): void {
    this.activeComment = activeComment;
  }

  updateComment({ text, commentId }: { text: string, commentId: string }) {
    //call service
    this.CommentService.updateComment(commentId, text).subscribe((updatedComment) => {
      this.comments = this.comments.map((comment) => {
        if (comment.id == commentId) {
          return updatedComment
        }
        return comment;
      });
      this.activeComment = null;
    })
  }

  deleteComment(commentId: string): void {
    this.CommentService.deleteComment(commentId).subscribe(() => {
      this.comments = this.comments.filter(comment => comment.id !== commentId)
    })
  }
}
