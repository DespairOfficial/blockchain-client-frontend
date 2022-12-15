import { $host } from '.';
import { ChainsResponse, Message } from '../interfaces/Chains';
import { SendCoins } from '../interfaces/SendCoins';
import { SendMessage } from '../interfaces/SendMessage';



export const getChains = async (): Promise<ChainsResponse> => {
	const response = await $host.get('/chains');
	return response.data;
};

export const getCoins = async () => {
	const response = await $host.get('/coins');
	return response.data;
};
export const sendCoins = async (sendCoins: SendCoins) => {
	const response = await $host.post('/send_coins', { ...sendCoins });
	return response.data;
};
export const sendMessage = async (sendMessage: SendMessage) => {
	const response = await $host.post('/send_message', { ...sendMessage });
	return response.data;
};

export const getMessages = async (): Promise<Message[]> => {
	const response = await $host.get('/get_my_messages');
	return response.data;
};
