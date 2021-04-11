export interface PostInterface {
  id?: number
  category?: string
  createdAt: string
  author?: {
    url: string
    name: string
  }
  image?: string
  title: string
  short?: string
}
