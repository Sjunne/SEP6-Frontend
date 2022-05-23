import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommentFormComponent } from "../components/comment-form/comment-form.component";
import { CommentComponent } from "../components/comment/comment.component";
import { CommentsComponent } from "../components/comments/comments.component";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [CommentsComponent, CommentComponent, CommentFormComponent],
  exports: [CommentsComponent],
  providers: []
})
export class CommentNode {

}
