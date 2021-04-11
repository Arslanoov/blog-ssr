export interface PostInterface {
  category: string
  createdAt: string
  author: {
    url: string
    name: string
  }
  title: string
  short: string
}
