import ActionButtons from '../ActionButtons';
import Body from '../Body';
import Desc from '../Desc';
import Title from '../Title';

function QuestionBox({ questions, questionsLength, step, answers, setAnswer }) {
  return (
    <div>
      <Title>{questions.title}</Title>
      <Desc>{questions.desc}</Desc>
      <Body type={questions.type} answer={answers} setAnswer={setAnswer} />
      <ActionButtons questionsLength={questionsLength} step={step} />
    </div>
  );
}

export default QuestionBox;
