import React from "react";
import { Avatar, useChatContext } from "stream-chat-react";

const CustomChannelPreview = ({ channel, setActiveChannel }) => {
  const { messages } = channel.state;
  const messagePreview = messages[messages.length - 1]?.text?.slice(0, 30);

  return (
    <div
      onClick={() => {
        setActiveChannel?.(channel);
        console.log(channel);
      }}
      style={{ margin: "12px", display: "flex", gap: "5px" }}
    >
      <div>
        <img
          src={channel.data?.image}
          alt="channel-image"
          style={{ height: "36px" }}
        />
      </div>
      <div style={{ flex: 1 }}>
        <div>{channel.data?.name || "Unnamed Channel"}</div>
        {messagePreview && (
          <div style={{ fontSize: "14px" }}>{messagePreview}</div>
        )}
      </div>
    </div>
  );
};

export default CustomChannelPreview;
