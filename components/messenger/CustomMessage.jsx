import React, { useRef } from "react";
import {
  Attachment,
  Avatar,
  messageHasReactions,
  MessageOptions,
  MessageRepliesCountButton,
  MessageStatus,
  MessageText,
  MessageTimestamp,
  ReactionSelector,
  SimpleReactionsList,
  useMessageContext,
} from "stream-chat-react";

import "./CustomMessage.scss";

export const CustomMessage = () => {
  const {
    isReactionEnabled,
    message,
    reactionSelectorRef,
    showDetailedReactions,
  } = useMessageContext();

  const messageWrapperRef = useRef(null);

  const canReact = isReactionEnabled;
  const hasReactions = messageHasReactions(message);
  const hasAttachments = message.attachments && message.attachments.length > 0;

  return (
    <div className="message-wrapper">
      <Avatar image={message.user?.image} />
      <div className="message-wrapper-content">
        <MessageOptions messageWrapperRef={messageWrapperRef} />
        <div className="message-header">
          <div className="message-header-name">{message.user?.name}</div>
          <div className="message-header-timestamp">
            <MessageTimestamp />
          </div>
        </div>
        {showDetailedReactions && canReact && (
          <ReactionSelector ref={reactionSelectorRef} />
        )}
        <MessageText />
        <MessageStatus />
        {hasAttachments && <Attachment attachments={message.attachments} />}
        {hasReactions && <SimpleReactionsList />}
        <MessageRepliesCountButton reply_count={message.reply_count} />
      </div>
    </div>
  );
};
