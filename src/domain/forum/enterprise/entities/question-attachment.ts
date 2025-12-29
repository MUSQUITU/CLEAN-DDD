import { Entity } from '@/core/entities/entity'
import type { UniqueEntityID } from '@/core/entities/unique-entity-id'

export interface QuestionAttachmentProps {
  questionId: UniqueEntityID
  attachmentsId: UniqueEntityID
}

export class QuestionAttachment extends Entity<QuestionAttachmentProps> {
  get questionId() {
    return this.props.questionId
  }

  get attachmentId() {
    return this.props.attachmentsId
  }

  static create(props: QuestionAttachmentProps, id?: UniqueEntityID) {
    const attachment = new QuestionAttachment(props, id)

    return attachment
  }
}
