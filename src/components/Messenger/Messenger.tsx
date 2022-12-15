import { useEffect, useState } from 'react';
import { getMessages, sendMessage } from '../../http/blockchainApi';
import { Message } from '../../interfaces/Chains';
import Field from './Field/Field';

const Messanger = () => {
	const [messages, setMessages] = useState<Message[]>([]);

	const [info, setInfo] = useState<string>('');
	const [message, setMessage] = useState<string>('');

	const myHash = '148289c8597625c9a756fed7fb547a33cb02b835115b334bd2fbc47ff45547b9';
	const kMeans = '6d22d1046aeffc8eb1fff1a32dd912a107277b05032c933ae05cbb9ee48b1f36';

	useEffect(() => {
		getMessages().then((data) => {
			setMessages(data);
		});
	}, []);
	const onSend = () => {
		sendMessage({
			type_task: 'custom',
			from_hach: myHash,
			to_hach: kMeans,
			message: message,
		}).then((data) => {
			setInfo(data?.message);
			setMessage('');
		});
	};

	return (
		<div className=" flex flex-col h-full w-full">
			<div>
				<div className="text-center">To hash</div>
				<div className="p-2 border-2 w-full"> {kMeans} </div>
			</div>
			<Field state={messages} />

			<div className="flex flex-row w-full  items-center">
				<div className="p-4 w-full">
					<input
						className="border-2 w-full p-2"
						value={message}
						onChange={(e) => {
							setMessage(e.target.value);
						}}
					></input>
				</div>

				<button
					onClick={() => {
						onSend();
					}}
					className="bg-slate-300 p-2 w-60 h-16"
				>
					Send
				</button>
			</div>
		</div>
	);
};
export default Messanger;
