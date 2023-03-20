import { useState } from "react";

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const Home = () => {
  const [userInput, setUserInput] = useState("");
  const [chatLogs, setChatLogs] = useState([]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    if (userInput === "") return;
    const newUserMessage = [
      ...chatLogs,
      {
        user: "me",
        message: userInput,
      },
      {
        user: "bot",
        message: "...",
      },
    ];
    setChatLogs(newUserMessage);
    const requestAnswer = async () => {
      try {
        const response = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: userInput,
          temperature: 0,
          max_tokens: 99999,
        });
        const text = response.data.choices[0].text;
        console.log(text);
        setChatLogs([
          ...chatLogs,
          {
            user: "me",
            message: userInput,
          },
          {
            user: "bot",
            message: text,
          },
        ]);
      } catch (error) {
        setChatLogs([
          ...chatLogs,
          {
            user: "me",
            message: userInput,
          },
          {
            user: "bot",
            message: error,
          },
        ]);
      }
    };
    requestAnswer();
    setUserInput("");
  };
  return (
    <div className="home-container">
      <div className="output-area">
        {chatLogs.length === 0 && (
          <div className="noContentContainer">
            <div className="askText">Ask me and you will find out</div>
            <img src="/robot.png" className="robotImg" alt="" />
          </div>
        )}
        {chatLogs.map((message, i) => (
          <ChatMessage message={message} key={i} />
        ))}
      </div>
      <div className="input-area">
        <form onSubmit={handleSearch} className="input-container">
          <input
            type="text"
            name=""
            id=""
            placeholder="Type your question..."
            value={userInput}
            onChange={handleInputChange}
          />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

const ChatMessage = ({ message }) => {
  return (
    <div className={message.user === "me" ? "usertext" : "robottext"}>
      <div>
        <img
          src={message.user === "me" ? "/user.png" : "/bot.png"}
          alt=""
          className="smallImg"
        />
      </div>
      <div className="text">{message.message}</div>
    </div>
  );
};

export default Home;
