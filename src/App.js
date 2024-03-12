import React from "react";
import Header from "./components/Header";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import Card from "./components/shared/Card";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback}></FeedbackList>
      </div>
    </>
  );
}

export default App;
