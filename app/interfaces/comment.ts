export interface CommentInterface {
  id: number
  createdAt: string
  author: {
    url: string
    name: string
  }
  content: string
  repliedTo?: CommentInterface
}
