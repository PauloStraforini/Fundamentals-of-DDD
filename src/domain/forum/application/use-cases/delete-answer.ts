import { AnswersRepository } from '../repositories/answer-repository'

interface DeleteAnswerUseCaseRequest {
  authorId: string
  AnswerId: string
}

interface DeleteAnswerUseCaseResponse {}

export class DeleteAnswerUseCase {
  constructor(private AnswersRepository: AnswersRepository) {}

  async execute({
    AnswerId,
    authorId,
  }: DeleteAnswerUseCaseRequest): Promise<DeleteAnswerUseCaseResponse> {
    const Answer = await this.AnswersRepository.findById(AnswerId)

    if (!Answer) {
      throw new Error('Answer not found.')
    }

    if (authorId !== Answer.authorId.toString()) {
      throw new Error('Not allowed.')
    }

    await this.AnswersRepository.delete(Answer)

    return {}
  }
}
