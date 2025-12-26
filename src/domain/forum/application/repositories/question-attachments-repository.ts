import type { QuestionAttachment } from '../../enterprise/entities/question-attachment'

export interface QuestionAttachmentsRepository {
  findManyByQuestinId(questionId: string): Promise<QuestionAttachment[]>
}
