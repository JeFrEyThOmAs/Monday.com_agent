import ChatMessage from "./ChatMessage";

function ChatWindow({ messages }) {
  return (
    <div className="chat-window">
      {messages.map((message, index) => (
        <ChatMessage
          key={index}
          sender={message.sender}
          text={message.text}
        />
      ))}
    </div>
  );
}

export default ChatWindow;