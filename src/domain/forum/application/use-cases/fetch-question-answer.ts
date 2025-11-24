import type { Answer } from '../../enterprise/entities/answer'
import type { AnswersRepository } from '../repositories/answers-repository'

interface FetchQuenstionAnswersUseCaseRequest {
  questionId: string
  page: number
}

interface FetchQuenstionAnswersUseCaseReponse {
  answers: Answer[]
}

export class FetchQuenstionAnswersUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    questionId,
    page,
  }: FetchQuenstionAnswersUseCaseRequest): Promise<FetchQuenstionAnswersUseCaseReponse> {
    const answers = await this.answersRepository.findManyByQuestionId(
      questionId,
      { page },
    )

    return {
      answers,
    }
  }
}
