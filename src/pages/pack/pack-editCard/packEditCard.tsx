import { Dispatch, SetStateAction, useRef } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useController, useForm } from 'react-hook-form'
import { z } from 'zod'

import { utilityZodCardSchema } from '@/pages/decks/hooks-and-functions/utilityZodCardSchema.ts'
import { ModalAddOrEditCard } from '@/pages/pack/pack-modal-card'

const { addNewCardSchema } = utilityZodCardSchema()

type NewCardSchema = z.infer<typeof addNewCardSchema>

type PackEditCardProps = {
  cardId: string
  question: string
  answer: string
  questionImage: string
  answerImage: string
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  utilityEditCard: (id: string, body: FormData) => void ///!!!!
}
export const PackEditCard = ({
  cardId,
  question,
  answer,
  questionImage,
  answerImage,
  open,
  setOpen,
  utilityEditCard,
}: PackEditCardProps) => {
  // const { utilityEditCard, isLoading } = useEditCard()

  const hiddenInputRefQuestion = useRef<HTMLInputElement | null>(null)
  const hiddenInputRefAnswer = useRef<HTMLInputElement | null>(null)

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<NewCardSchema>({
    resolver: zodResolver(addNewCardSchema),
  })

  const {
    field: { value: imageQuestionFormValue, onChange: onChangeImageQuestionForm },
  } = useController({ name: 'imageQuestion', control, defaultValue: questionImage })

  const {
    field: { value: imageAnswerFormValue, onChange: onChangeImageAnswerForm },
  } = useController({ name: 'imageAnswer', control, defaultValue: answerImage })

  const {
    field: { value: questionFormValue, onChange: onChangeQuestionFormValue },
  } = useController({ name: 'question', control, defaultValue: question })

  const {
    field: { value: answerFormValue, onChange: onChangeAnswerFormValue },
  } = useController({ name: 'answer', control, defaultValue: answer })

  const onHandleSubmitForm = handleSubmit((form: NewCardSchema) => {
    const formData = new FormData()

    if (form.imageQuestion?.[0] instanceof File) {
      formData.append('questionImg', form.imageQuestion[0])
    } else if (form.imageQuestion === '') {
      formData.append('questionImg', '')
    }

    if (form.imageAnswer?.[0] instanceof File) {
      formData.append('answerImg', form.imageAnswer[0])
    } else if (form.imageAnswer === '') {
      formData.append('answerImg', '')
    }

    formData.append('question', form.question)
    formData.append('answer', form.answer)

    utilityEditCard(cardId, formData)

    setOpen(!open)
  })

  const handlerClosedModal = () => {
    setOpen(!open)
  }

  // console.log('load', isLoading)

  return (
    <div>
      <ModalAddOrEditCard
        open={open}
        setOpen={setOpen}
        onHandleSubmitForm={onHandleSubmitForm}
        register={register}
        errors={errors}
        imageQuestionFormValue={imageQuestionFormValue}
        onChangeImageQuestionForm={onChangeImageQuestionForm}
        imageAnswerFormValue={imageAnswerFormValue}
        onChangeImageAnswerForm={onChangeImageAnswerForm}
        hiddenInputRefQuestion={hiddenInputRefQuestion}
        hiddenInputRefAnswer={hiddenInputRefAnswer}
        control={control}
        questionValue={questionFormValue}
        handlerQuestionChange={onChangeQuestionFormValue}
        answerValue={answerFormValue}
        handlerAnswerChange={onChangeAnswerFormValue}
        handlerClosedModal={handlerClosedModal}
        headerTitle={'Edit card'}
        buttonTitle={'Save Changes'}
      />
    </div>
  )
}
