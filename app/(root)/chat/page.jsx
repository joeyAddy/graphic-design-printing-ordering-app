"use client";

import { Context } from "@/context";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, useContext } from "react";
import { FaSpinner } from "react-icons/fa";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  Window,
  ChannelHeader,
  MessageList,
  MessageInput,
  Thread,
  LoadingIndicator,
  ChannelList,
} from "stream-chat-react";

import "stream-chat-react/dist/css/v2/index.css";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

export default function ChatWidget() {
  const [client, setClient] = useState(null);
  const [channel, setChannel] = useState(null);
  const [chatProfile, setChatProfile] = useState(null);

  const template = useSearchParams().get("template");

  const { user } = useContext(Context);

  useEffect(() => {
    if (user === null) {
      setTimeout(() => {
        window.location.href = "/signin";
      }, 10000);
      return;
    }
    setChatProfile({
      id: user[0]?.uid,
      name:
        user[0]?.displayName !== null ? user[0]?.displayName : user[0]?.email,
      image: user[0]?.photoURL,
    });
    console.log("====================================");
    console.log(user);
    console.log("====================================");
  }, []);

  useEffect(() => {
    async function init() {
      const chatClient = StreamChat.getInstance(apiKey);
      if (!chatProfile) return;
      await chatClient.connectUser(
        chatProfile,
        chatClient.devToken(chatProfile.id)
      );

      const channel = chatClient.channel(
        "messaging",
        `order-discussions-${chatProfile?.id}`,
        {
          name: `${chatProfile.name} Channel`,
          members:
            chatProfile.id === "106840650439188500036"
              ? [chatProfile.id]
              : [chatProfile.id, "106840650439188500036"],
          image:
            chatProfile?.photoURL !== null
              ? chatProfile?.photoURL
              : "https://res.cloudinary.com/dw9oa2vpq/image/upload/v1699006441/casual-young-african-man-smiling-isolated-white_a3qpee.jpg",
        }
      );

      await channel.watch();

      setChannel(channel);
      setClient(chatClient);
    }

    init();

    if (client) return () => client.disconnectUser();
  }, [chatProfile]);

  useEffect(() => {
    (async () => {
      if (template)
        axios({
          url: template,
          method: "GET",
          responseType: "arraybuffer",
        })
          .then(async (response) => {
            console.log("====================================");
            console.log(response);
            console.log("====================================");

            const blob = new Blob([response.data], { type: "image/jpeg" }); // Adjust the type as needed (JPEG, PNG, etc.)

            // Create a File object from the Blob
            const file = new File([blob], "template.jpg", {
              type: "image/jpeg",
            }); // Adjust the filename and type

            console.log("====================================");
            console.log(file);
            console.log("====================================");

            if (!channel) return;
            const imageResponse = await channel.sendImage(file);

            console.log("====================================");
            console.log(imageResponse);
            console.log("====================================");

            await channel.sendMessage({
              text: "I want this template design as a basis for mine",
              attachments: [
                {
                  type: "image",
                  author_name: "Eddy Graphics",
                  title: "Design template",

                  image_url: imageResponse.file,
                  thumb_url: imageResponse.file,
                },
              ],
            });
            // create file link in browser's memory
            // const href = URL.createObjectURL(response.data);

            // // create "a" HTML element with href to file & click
            // const link = document.createElement('a');
            // link.href = href;
            // link.setAttribute('download', 'file.pdf'); //or any other extension
            // document.body.appendChild(link);
            // link.click();

            // // clean up "a" element & remove ObjectURL
            // document.body.removeChild(link);
            // URL.revokeObjectURL(href);
          })
          .catch((error) => {
            console.log("====================================");
            console.log(error);
            console.log("====================================");
          });
    })();
  }, [channel]);

  const sort = { last_message_at: -1 };
  const filters = {
    type: "messaging",
    members: { $in: [chatProfile?.id] },
  };
  const options = {
    limit: 10,
  };

  if (!chatProfile)
    return (
      <div className="flex justify-center flex-col items-center min-h-[50vh]">
        <FaSpinner className="animate-spin text-4xl" />
        <p>Loading Profile...</p>
      </div>
    );
  if (!client && !channel)
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <LoadingIndicator className="h-20  w-20 fill-blue-200" />
        <p>Fetching Messages...</p>
      </div>
    );

  return (
    <div className="px-6 pb-8 w-full">
      <div className="py-6">
        <p className="text-3xl font-bold">Order Discussions</p>
      </div>
      <Chat client={client} theme="str-chat__theme-light">
        <div className="grid md:grid-cols-8 w-full">
          <div className="md:col-span-2">
            <ChannelList filters={filters} sort={sort} options={options} />
          </div>
          <div className="col-span-6">
            <Channel>
              <Window>
                <ChannelHeader />
                <div className="!bg-gray-500 max-h-[60vh]">
                  <MessageList />
                </div>
                <MessageInput />
              </Window>
              <Thread />
            </Channel>
          </div>
        </div>
      </Chat>
    </div>
  );
}
