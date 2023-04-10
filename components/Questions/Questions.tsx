import React from "react";
import styles from "./questions.module.css";

export default function Questions(props: any) {
  return props.questions.map((question: any) => (
    <div className={styles.questionBox}>
      <p className={styles.questionText}>{question.question}</p>
      <ul>
        {question.randomizedAnswers.map((answer: any) => {
          if (answer === question.correctAnswer) {
            return (
              <li
                className={styles.liQuestion}
                onClick={() => window.alert("Correct!")}
              >
                {answer}
              </li>
            );
          }
          return (
            <li
              className={styles.liQuestion}
              onClick={() => window.alert("Incorrect!")}
            >
              {answer}
            </li>
          );
        })}
      </ul>
    </div>
  ));
}
