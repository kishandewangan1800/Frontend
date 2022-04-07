import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './component/ChatFeed'
import LoginForm from './component/LoginForm';

function App() {

	if (!localStorage.getItem("username")) { return <LoginForm /> }

	return (
		<>
			<div className='title-inner'>
				<img className='logo' src="https://png.pngtree.com/element_our/png/20181229/vector-chat-icon-png_302635.jpg" alt="logo" />
				Chat Application
			</div>

			<ChatEngine
				height='100vh'
				userName={localStorage.getItem('username')}
				userSecret={localStorage.getItem('password')}
				projectID='2b67374c-73ad-4143-bba0-0f58852d01a9'
				renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
			/>
		</>

	);
}

export default App;
