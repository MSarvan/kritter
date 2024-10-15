import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [userQuestion, setUserQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setWelcomeMessage("Welcome!");
    }, 1000);
  }, []);

  const questions = [
    {
      id: 1,
      qn: "What is your name?",
    },
    {
      id: 2,
      qn: "How can I help you?",
    },
    {
      id: 3,
      qn: "What is the weather today?",
    },
    {
      id: 4,
      qn: 'Hi',
    }
  ];

  const answers = [
    {
      id: 1,
      ans: "My name is Chatbot.",
    },
    {
      id: 2,
      ans: "I can assist you with your queries.",
    },
    {
      id: 3,
      ans: "The weather is sunny.",
    },
    {
      id: 4,
      ans: "Hello, how can I assist you?",
    },
  ];

  const handleInputChange = (e) => {
    setUserQuestion(e.target.value);
  };

  const handleSend = () => {
    if (userQuestion.trim() === "") return;

    setChatHistory((prevChat) => [
      ...prevChat,
      { type: "question", content: userQuestion },
    ]);

    const matchedQuestion = questions.find(
      (question) => question.qn.toLowerCase() === userQuestion.toLowerCase()
    );

    if (matchedQuestion) {
      const matchedAnswer = answers.find(
        (answer) => answer.id === matchedQuestion.id
      );
      setChatHistory((prevChat) => [
        ...prevChat,
        { type: "answer", content: matchedAnswer.ans },
      ]);
    } else {
      setChatHistory((prevChat) => [
        ...prevChat,
        { type: "answer", content: "Invalid query" },
      ]);
    }

    setUserQuestion("");
  };

  return (
    <div className="container">
      <div className="chatbox">
        {welcomeMessage && <div className="welcomeBox">{welcomeMessage}</div>}
        <div className="chatarea">
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              className={`eachChat ${
                chat.type === "question" ? "right" : "left"
              }`}
            >
              {chat.content}
            </div>
          ))}
        </div>
        <div className="userInput">
          <input
            type="text"
            value={userQuestion}
            onChange={handleInputChange}
            placeholder="Type your question..."
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
