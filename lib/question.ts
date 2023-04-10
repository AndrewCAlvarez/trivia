export function randomizeQuestions(questions: any) {
  questions.forEach((question: any) => {
    const randomizedAnswers = question.incorrectAnswers.concat(
      question.correctAnswer
    );
    question.randomizedAnswers = randomizedAnswers;
  });
  return questions;
}
