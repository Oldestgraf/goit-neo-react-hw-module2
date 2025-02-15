import Description from "./components/Description/Description";
import Options from "./components/Options/Options"
import Feedback from "./components/Feedback/Feedback"
import Notification from "./components/Notification/Notification";
import { useState,useEffect } from "react";

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback ? JSON.parse(savedFeedback) : {good: 0, neutral: 0, bad: 0}
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options onLeaveFeedback={updateFeedback} showReset={totalFeedback > 0} onReset={resetFeedback} />
      {
        totalFeedback > 0 ? (
          <Feedback feedback={feedback} totalFeedback={totalFeedback} positivePercentage={positivePercentage} />
        ) : (
            <Notification message="No feedback yet"/>
        )
      }
    </>
  );
};

export default App;
