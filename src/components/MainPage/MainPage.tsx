import { useEffect,  useState } from 'react';
import { getChains,  sendCoins } from '../../http/blockchainApi';
import { UsersBlock } from '../../interfaces/Chains';

const MainPage = () => {
	const [chain, setChain] = useState<UsersBlock[]>([]);
	const [error, setError] = useState<string>();
	const [message, setMessage] = useState();
	const myHash = '148289c8597625c9a756fed7fb547a33cb02b835115b334bd2fbc47ff45547b9';
	useEffect(() => {
		getChains().then((data) => {
			if (data.success) {
				setChain(data?.chains?.users_block);
				return;
			}
			setError(data?.message);
		});
	}, []);
	const [toHash, setToHash] = useState('');

	const [coinsToSend, setCoinsToSend] = useState(0);
	const onSend = () => {
		sendCoins({
			type_task: 'send_coins',
			from_hach: myHash,
			to_hach: toHash,
			count_coins: coinsToSend,
		}).then((data) => {
			console.log(data);
			setMessage(data?.message);
		});
	};
	return (
		<>
			<div className=" flex flex-col items-center space-y-5">
				<label htmlFor="" className="text-center">
					From hash
				</label>
				<label className="p-2 border-2 w-full"> {myHash} </label>
			</div>
			<div className=" flex flex-col items-center space-y-5">
				<label htmlFor="" className="text-center">
					To hash
				</label>

				<select
					name="select"
					id=""
					value={toHash.toString()}
					onChange={(e) => {
						setToHash(e.target.value);
					}}
					className="p-2 w-full"
				>
					{chain?.map((block) => {
						return (
							<option key={block.id} value={block.hach.toString()}>
								{block.hach}
							</option>
						);
					})}
				</select>
			</div>
			<div>
				<input
					type="number"
					value={coinsToSend}
					onChange={(e) => {
						setCoinsToSend(parseInt(e.target.value));
					}}
					className="p-2 border-2 w-full"
				/>
			</div>
			<div>
				{error && <p className="text-red-500 font-bold text-2xl">{error}</p>}
				{message && <p className="text-green-500 fond-bold text-2xl">{message}</p>}
			</div>
			<button
				onClick={() => {
					onSend();
				}}
				className="bg-slate-300 p-4 w-60 absolute bottom-4 right-4"
			>
				Send
			</button>
		</>
	);
};
export default MainPage;
