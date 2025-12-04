import type { QuestionComment } from '../../enterprise/entities/question-comment'
import type { QuestionCommentsRepository } from '../repositories/question-comments-repositoy'

interface FetchQuestionCommentsUseCaseRequest {
  questionId: string
  page: number
}

interface FetchQuestionCommentsUseCaseReponse {
  questionComments: QuestionComment[]
}

export class FetchQuestionCommentsUseCase {
  constructor(private questionCommentsRepository: QuestionCommentsRepository) {}

  async execute({
    questionId,
    page,
  }: FetchQuestionCommentsUseCaseRequest): Promise<FetchQuestionCommentsUseCaseReponse> {
    const questionComments =
      await this.questionCommentsRepository.findManyByQuestionId(questionId, {
        page,
      })

    return {
      questionComments,
    }
  }
}
