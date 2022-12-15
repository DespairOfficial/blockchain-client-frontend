export interface UsersBlock {
	id: number;
	curlid: string;
	hach: string;
	coins: number;
}

export interface BlockTransaction {
	id: number;
	prev_hash: string;
	current_hash: string;
	data_json?: any;
	coins: number;
	is_genesis: boolean;
	create_user?: any;
}

export interface EncryptedMessge{
	private_key: string;
    encrypted_object: {
			action: string,
			curlid: string,
			random_key: string,
			random_number: string,
			secret_text: string
        }
}


export interface DataJsonCustom {
	to_hach: string;
	from_hach: string;
	prev_hash: string;
	type_task: 'custom';
	message: string | EncryptedMessge;
}
export interface DataJsonSendCoins {
	to_hach: string;
	from_hach: string;
	prev_hash: string;
	type_task: 'send_coins';
	count_coins: number;
}

export interface DataJson {
	hash: string;
	data_json: DataJsonCustom | DataJsonSendCoins;
}

export interface BlockActive {
	id: number;
	prev_hash: string;
	current_hash: string;
	data_json: DataJson[];
	is_genesis: boolean;
	valid_count: number;
}

export interface Chains {
	users_block: UsersBlock[];
	block_transaction: BlockTransaction[];
	block_active: BlockActive[];
}

export interface ChainsResponse {
	success: boolean;
	chains: Chains;
	message?: string;
}

export interface Message {
	sender: string;
	message: string;
}
