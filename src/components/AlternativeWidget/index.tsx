interface InputProps {
  alternativeId: string;
  questionId: string;
  alternativeIndex: number;
  isQuestionSubmited: boolean;
  setSelected: Function;
}

export default function AlternativeWidget({
  alternativeId,
  questionId,
  isQuestionSubmited,
  setSelected,
  alternativeIndex,
}: InputProps) {
  return (
    <input
      id={alternativeId}
      name={questionId}
      type="radio"
      onClick={() => {
        if (!isQuestionSubmited) {
          setSelected(alternativeIndex);
        }
      }}
      hidden
    />
  );
}
