import { Slug } from "./value-objects/slug.js"
import { Entity } from "../../core/entities/entity.js"
import type { UniqueEntityID } from "../../core/entities/unique-entity-id.js"

interface QuestionProps {
  title: string
  bestAnswerId?: UniqueEntityID
  content: string
  slug: Slug
  authorId: string
  createdAt: Date
  updateAt?: Date
}

export class Question extends Entity<QuestionProps> {
  static create(props: QuestionProps, id?: UniqueEntityID) {
    const question = new Question({
      ...props,
      createdAt: new Date(),   
    }, id)

    return question
  }
}

