"use client";

import { Context } from "@/context";
import { Tabs, Tab } from "@nextui-org/react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import {
  useState,
  useEffect,
  useContext,
  useRef,
  useLayoutEffect,
} from "react";
import { FaSpinner } from "react-icons/fa";
import { MdMessage, MdHeadphones, MdManageHistory } from "react-icons/md";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Input,
} from "@nextui-org/react";
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
  TypingIndicator,
  useChannelStateContext,
} from "stream-chat-react";

import "stream-chat-react/dist/css/v2/index.css";
import { PaystackButton } from "react-paystack";
import { CustomMessage } from "@/components/messenger/CustomMessage";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;

export default function ChatWidget() {
  const { user } = useContext(Context);

  const ref = useRef(null);
  const [lottie, setLottie] = useState(null);

  const [client, setClient] = useState(null);
  const [channel, setChannel] = useState(null);
  const [chatProfile, setChatProfile] = useState(null);

  const [email, setEmail] = useState(user !== null ? user[0]?.email : "");
  const [name, setName] = useState(user !== null ? user[0]?.displayName : "");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState();

  const template = useSearchParams().get("template");

  useEffect(() => {
    const init = async () => {
      const { Ripple, Input, initTE } = await import("tw-elements");
      initTE({ Ripple, Input });
    };
    init();
  }, []);

  const Users = () => {
    const { channel } = useChannelStateContext();
    const [channelUsers, setChannelUsers] = useState([]);

    useEffect(() => {
      const updateChannelUsers = () => {
        setChannelUsers(
          Object.values(channel.state.members).reduce((count, user) => {
            if (user.user && user.user.online) {
              return count + 1;
            }
            return count;
          }, 0)
        );
      };

      updateChannelUsers();
    }, [client, channel]);

    return <span className="text-sm text-gray-500">{channelUsers} online</span>;
  };

  const CustomChannelHeader = (props) => {
    const { title } = props;

    const { channel } = useChannelStateContext();
    const { name, image } = channel.data || {};

    console.log("====================================");
    console.log(channel);
    console.log("====================================");

    return (
      <div className="str-chat__header-livestream ml-4">
        <div className="flex space-x-2">
          <div className="h-fit">
            <img
              src={String(image)}
              alt="Avatar"
              height={30}
              width={30}
              className="rounded-full"
            />
          </div>
          <div>
            <div className="header-item font-semibold">
              <span className="header-pound">#</span>
              {title || name}
            </div>
            <Users />
          </div>
          <TypingIndicator />
        </div>
      </div>
    );
  };

  useEffect(() => {
    import("lottie-web").then((Lottie) => setLottie(Lottie.default));
  }, []);

  useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        // path to your animation file, place it inside public folder
        path: "../../../assets/lottie/paymentSucess.json",
      });

      return () => animation.destroy();
    }
  }, [lottie]);

  useEffect(() => {
    if (user === null) {
      window.location.href = "/signin";
      return;
    }
    setChatProfile({
      id: String(user[0]?.uid).replace(/\+/g, ""),
      name:
        user[0]?.displayName !== null
          ? user[0]?.displayName
          : user[0]?.email !== null
          ? user[0]?.email
          : user[0]?.phoneNumber,
      image:
        user[0]?.photoURL ||
        "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
    });
    console.log("====================================");
    console.log(user, "user");
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
          name: `${chatProfile.name}`,
          members:
            chatProfile.id === "110327416125539799158"
              ? [chatProfile.id]
              : [chatProfile.id, "110327416125539799158"],
          image:
            chatProfile?.image !== null
              ? chatProfile?.image
              : "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
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

  if (!user)
    return (
      <div className="flex justify-center flex-col items-center min-h-[50vh]">
        <FaSpinner className="animate-spin text-4xl" />
        <p>Loading Profile...</p>
      </div>
    );
  if (!client && !channel)
    return (
      <div className="flex flex-col justify-center items-center min-h-[50vh]">
        <LoadingIndicator className="!h-10" />
        <p>Fetching Messages...</p>
      </div>
    );

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  };

  const customActions = {
    Download: (message) => {
      if (message.attachments.length > 0) {
        axios({
          url: message.attachments[0].image_url,
          method: "GET",
          responseType: "blob",
        })
          .then(async (response) => {
            console.log("====================================");
            console.log(response);
            console.log("====================================");

            // create file link in browser's memory
            const href = URL.createObjectURL(response.data);

            // create "a" HTML element with href to file & click
            const link = document.createElement("a");
            link.href = href;
            link.setAttribute("download", "design.png"); //or any other extension
            document.body.appendChild(link);
            link.click();

            // clean up "a" element & remove ObjectURL
            document.body.removeChild(link);
            URL.revokeObjectURL(href);
          })
          .catch((error) => {
            console.log("====================================");
            console.log(error);
            console.log("====================================");
          });
      } else {
        alert("No Attachement to download.");
      }
    },
  };

  return (
    <div className="relative">
      <div ref={ref} />

      <div className="flex flex-wrap gap-4">
        <Popover
          key="blur"
          showArrow
          offset={10}
          placement="bottom"
          backdrop="blur"
        >
          <PopoverTrigger className="fixed bottom-10 right-10 z-[1000] drop-shadow-2xl">
            {/* <div className="fixed bottom-10 right-10 z-[9999]"> */}
            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              className="border-2 border-blue-500 rounded-full font-semibold drop-shadow-2xl px-5 py-2 bg-white"
            >
              Pay Now
            </button>
            {/* </div> */}
          </PopoverTrigger>
          <PopoverContent className="w-[340px]">
            {(titleProps) => (
              <div className="pb-4 p-2 w-full">
                <p
                  className="text-small font-bold text-foreground"
                  {...titleProps}
                >
                  Order Form
                </p>
                <div className="mt-2 flex flex-col gap-2 w-full [&>.paystack-button]:bg-slate-600">
                  <Input
                    defaultValue={email}
                    label="Email"
                    size="sm"
                    variant="bordered"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    defaultValue={name}
                    label="Name"
                    size="sm"
                    variant="bordered"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Input
                    defaultValue={phone}
                    label="Phone Number"
                    size="sm"
                    variant="bordered"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <Input
                    defaultValue={amount}
                    label="Price"
                    size="sm"
                    variant="bordered"
                    onChange={(e) =>
                      setAmount((prev) => {
                        return e.target.value * 100;
                      })
                    }
                  />
                  <PaystackButton
                    className="bg-blue-500 py-3 font-semibold rounded-lg text-white"
                    {...componentProps}
                  />
                </div>
              </div>
            )}
          </PopoverContent>
        </Popover>
      </div>
      <div className="px-6 pb-8 w-full">
        <div className="py-6 w-full relative">
          <div className="flex w-full flex-col">
            <Tabs
              aria-label="Options"
              className="w-full pb-6"
              color="primary"
              variant="bordered"
            >
              <Tab
                className=""
                key="messages"
                title={
                  <div className="flex items-center space-x-2">
                    <MdMessage />
                    <span>Messages</span>
                  </div>
                }
              >
                <div className="min-h-[50vh]">
                  <Chat client={client} theme="str-chat__theme-light">
                    <div className="grid md:grid-cols-8 w-full">
                      <div className="md:col-span-2">
                        <ChannelList
                          filters={filters}
                          sort={sort}
                          options={options}
                        />
                      </div>
                      <div className="col-span-6">
                        <Channel>
                          <Window>
                            <CustomChannelHeader />
                            <div className="max-h-[60vh] pt-12">
                              <MessageList
                                customMessageActions={customActions}
                              />
                            </div>
                            <MessageInput />
                          </Window>
                          <Thread />
                        </Channel>
                      </div>
                    </div>
                  </Chat>
                </div>
              </Tab>
              <Tab
                key="music"
                title={
                  <div className="flex items-center space-x-2">
                    <MdManageHistory />
                    <span>Order History</span>
                  </div>
                }
              >
                <div className="min-h-[50vh]">
                  <p className="animate-pulse">In Development</p>
                </div>
              </Tab>
              <Tab
                key="videos"
                title={
                  <div className="flex items-center space-x-2">
                    <MdHeadphones />
                    <span>Customer Support</span>
                  </div>
                }
              >
                <div className="min-h-[50vh]">
                  <p className="animate-pulse">In Development</p>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
