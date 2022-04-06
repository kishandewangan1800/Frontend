import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './component/ChatFeed'

function App() {
  return (
    <ChatEngine
			height='100vh'
			userName='ridderkisshna'
			userSecret='ridder@123'
			projectID='2b67374c-73ad-4143-bba0-0f58852d01a9'
			renderChatFeed= {(chatAppProps)=> <ChatFeed {...chatAppProps} />}
		/>
  );
}

export default App;
