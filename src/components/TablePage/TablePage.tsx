import { useEffect, useState } from 'react';
import { getChains } from '../../http/blockchainApi';
import { BlockActive, UsersBlock } from '../../interfaces/Chains';

const TablePage = () => {
	const [blockActive, setBlockActive] = useState<BlockActive[]>([]);

	useEffect(() => {
		getChains().then((data) => {
			if (data.success) {
				setBlockActive(data.chains.block_active);
				return;
			}
		});
	}, []);
	return (
		<div className="overflow-y-auto">
			{blockActive.map((block) => {
				return (
					<div key={block.id} className="flex flex-col justify-center items-center mb-10">
						<div className="font-bold text-3xl">Block {block.id}</div>
						<div className="w-full">
							{block.data_json.map((data) => {
								return (
									<div key={data.hash} className="border-b-2 border-black py-3 w-full">
										<div className="text-xl font-bold ">Transaction</div>
										<div className="pl-5">
											<div>FROM: {data.data_json.from_hach}</div>
											<div>TO: {data.data_json.to_hach}</div>
											{data.data_json.type_task == 'send_coins' && (
												<div>COINS: {data.data_json.count_coins}</div>
											)}
											{data.data_json.type_task == 'custom' && (
												<div>
													MESSAGE:{' '}
													{JSON.stringify(data.data_json.message , null, 4)}
												</div>
											)}
										</div>
									</div>
								);
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
};
export default TablePage;
