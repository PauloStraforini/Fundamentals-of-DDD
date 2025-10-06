import { AnswersRepository } from '../repositories/answer-repository'

interface editAnswerUseCaseRequest {
  authorId: string
  answerId: string
  content: string
}

interface editAnswerUseCaseResponse {}

export class EditAnswerUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    authorId,
    answerId,
    content,
  }: editAnswerUseCaseRequest): Promise<editAnswerUseCaseResponse> {
    const answer = await this.answersRepository.findById(answerId)

    if (!answer) {
      throw new Error('Answer not found.')
    }

    if (authorId !== answer.authorId.toString()) {
      throw new Error('Not allowed.')
    }

    answer.content = content

    await this.answersRepository.save(answer)

    return {}
  }
}
