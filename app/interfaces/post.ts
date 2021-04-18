import { TagInterface } from "~/interfaces/tag"

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
  tags?: Array<TagInterface>
  commentsCount: number
}
