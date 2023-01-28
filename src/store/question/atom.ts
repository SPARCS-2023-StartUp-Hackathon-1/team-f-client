import { atom, atomFamily } from 'recoil';

type BasicQuestion = {
  id: number;
  question: string;
};

type UserAnswer = {
  isAnswer: boolean;
  answer: string;
};

interface TailQuestionAtomFamilyProps {
  basicQuestion: BasicQuestion;
  userAnswer: UserAnswer;
  aiAnswer: string;
}

export interface QuestionAtomFamilyProps {
  basicQuestion: BasicQuestion;
  userAnswer: UserAnswer;
  aiAnswer: string;
  isTailQuestion: boolean;
}

const questionAtomFamily = atomFamily<QuestionAtomFamilyProps, number>({
  key: 'questionAtomFamily',
  default: inputKey => {
    return {
      basicQuestion: { id: 0, question: '' },
      userAnswer: { isAnswer: false, answer: '' },
      aiAnswer: '',
      isTailQuestion: false,
    };
  },
});

const tailQuestionAtomFamily = atomFamily<
  Omit<TailQuestionAtomFamilyProps, 'basicQuestion'>,
  number
>({
  key: 'tailQuestionAtomFamily',
  default: inputKey => {
    return {
      userAnswer: { isAnswer: false, answer: '' },
      aiAnswer: '',
    };
  },
});

const tailQuestionIdAtomFamily = atomFamily<number[], number>({
  key: 'tailQuestionIdAtomFamily',
  default: [],
});

const questionIsSubmitAtom = atom({
  key: 'questionIsSubmitAtom',
  default: false,
});

const questionOrderAtom = atom({
  key: 'questionOrderAtom',
  default: 1,
});

export {
  questionAtomFamily,
  questionOrderAtom,
  tailQuestionAtomFamily,
  tailQuestionIdAtomFamily,
  questionIsSubmitAtom,
};
