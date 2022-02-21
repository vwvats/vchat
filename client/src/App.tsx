import { ChannelContainer, ChannelListContainer } from "./components";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie/es6";

// const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div>
      <ChannelContainer />
      <ChannelListContainer />
    </div>
  );
};

export default App;
