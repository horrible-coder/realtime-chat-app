import chatListTypes from "./types";

export const startChat = (recipientPhone, recipientName) => {
  return {
    type: chatListTypes.START_CHAT,
    info: "Action to start a chat",
    phone: recipientPhone,
    name: recipientName,
  };
};

export const selectChat = (index) => {
  return {
    type: chatListTypes.SELECT_CHAT,
    info: "Action to select a chat",
    payload: index,
  };
};

export const addSentChatMessage = (receiver, messageSent) => {
  return {
    type: chatListTypes.ADD_SENT_MESSAGES_TO_CONTACT,
    info: "Action to add messages sent to contact",
    phone: receiver,
    message: messageSent,
  };
};

export const addReceivedChatMessage = (senderPhone, messageReceived) => {
  return {
    type: chatListTypes.ADD_RECEIVED_MESSAGES_TO_CONTACT,
    info: "Action to add messages received from contact",
    phone: senderPhone,
    message: messageReceived,
  };
};
