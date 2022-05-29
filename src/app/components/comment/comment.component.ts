import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ActiveCommentType } from '../../models/ActiveCommentType.enum';
import { ActiveCommentModel } from '../../models/ActiveCommentModel';
import { CommentModel } from '../../models/CommentModel';
import { User } from '../../shared/services/user';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment!: CommentModel
  @Input() replies!: CommentModel[];
  @Input() activeComment!: ActiveCommentModel | null;
  @Input() parentId: string | null = null;

  @Output() setActiveComment = new EventEmitter<ActiveCommentModel | null>();
  @Output() addComment = new EventEmitter<{ text: string; parentId: string | null; }>();
  @Output() updateComment = new EventEmitter<{ text: string; commentId: string; }>();
  @Output() deleteComment = new EventEmitter<string>();


  user!: User;


  createdAt: string = '';
  canReply: boolean = false;
  canEdit: boolean = false;
  canDelete: boolean = false;
  replyId: string | null = null;

  ActiveCommentType = ActiveCommentType

  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);

    const fiveMinutes = 300000;
    const timePassed = new Date().getMilliseconds() - new Date(this.comment.createdAt).getMilliseconds() > fiveMinutes;
    this.createdAt = new Date(this.comment.createdAt).toLocaleDateString() 
    this.canEdit = this.user.email === this.comment.username && !timePassed && this.replies.length === 0
    this.canDelete = this.user.email === this.comment.username && !timePassed && this.replies.length === 0;
    this.canReply = Boolean(this.user);

    this.replyId = this.parentId ? this.parentId : this.comment.id;
  }

  isReplying(): boolean{
    if (!this.activeComment)
      return false;

    return (
      this.activeComment.id === this.comment.id &&
      this.activeComment.type === this.ActiveCommentType.replying
    );
  }

  isEditing(): boolean {
    if (!this.activeComment)
      return false;

    return (
      this.activeComment.id === this.comment.id &&
      this.activeComment.type === this.ActiveCommentType.editing
    );
  }

}
