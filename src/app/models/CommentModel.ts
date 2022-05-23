export class CommentModel {
  id!: string;
  body!: string;
  username!: string;
  userId!: string;
  parentId!: string | null;
  createdAt!: string;
  movieId!: string;
}
