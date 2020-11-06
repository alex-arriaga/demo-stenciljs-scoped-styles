import { Speaker } from './Speaker'
import { Room } from './Room'

export interface Talk {
  id: string
  title: string
  slug: string
  summary: string
  starts_at: string
  ends_at: string
  thumbnail: string
  speaker: Speaker
  room: Room
}
