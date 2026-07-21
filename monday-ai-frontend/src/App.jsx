import { useState } from "react";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";
import { sendMessage } from "./api/chatApi";
import "./index.css";


function App() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello! Ask me anything about your Monday board."
    }
  ]);

  const handleSend = async (text) => {
    // Add user's message
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text,
      },
    ]);
  
    try {
      const reply = await sendMessage(text);
  
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: reply,
        },
      ]);
    } catch (error) {
      console.error(error);
  
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Unable to connect to the server.",
        },
      ]);
    }
  };

  return (
    <div className="app">

      <header className="header">
        <h1>Monday AI Assistant 🤖</h1>
      </header>

      <ChatWindow messages={messages} />

      <ChatInput onSend={handleSend} />

    </div>
  );
}

export default App;