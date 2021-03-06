import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectChat } from "../../redux/ChatList/actions";
import "./Chats.scss";

function Chats() {
  const chats = useSelector((state) => state.chatList.chatList);
  const chatIndex = useSelector((state) => state.chatList.selectedChatIndex);
  const dispatch = useDispatch();

  return (
    <div className="chatList">
      {chats.map((chat, index) => (
        <div
          className={chatIndex === index ? "selectedChat" : "chat"}
          key={index}
          onClick={() => dispatch(selectChat(index))}
        >
          <p className="contactInfo">{chat.name ? chat.name : chat.phone}</p>

          <p className="contactMessage">
            {chat.messages.length > 0 &&
              (chat.messages[chat.messages.length - 1].receiver !== ""
                ? "You: " + chat.messages[chat.messages.length - 1].text
                : chat.messages[chat.messages.length - 1].text)}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Chats;
