import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'

interface NotificationsProps {
  recipientId: UniqueEntityID
  title: string
  content: string
  readAt?: Date
  createdAt: Date
}

export class Notifications extends Entity<NotificationsProps> {
  get recipientId() {
    return this.props.recipientId
  }

  get content() {
    return this.props.content
  }

  get readAt() {
    return this.props.readAt
  }

  get createdAt() {
    return this.props.createdAt
  }

  static create(
    props: Optional<NotificationsProps, 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    const notification = new Notifications(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    )
    return notification
  }
}
