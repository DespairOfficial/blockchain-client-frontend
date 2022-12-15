import { memo, useEffect, useMemo, useState } from 'react';
import { Message } from '../../../interfaces/Chains';

interface FieldProps {
	state: Message[];
}


const Field = memo(({ state}: FieldProps) => {
	return (
		<div className="overflow-y-auto m-2 p-5">
			<div className="space-y-2">
				{state.reverse().map((item, i) => {
					return (
						<div key={i}>
							{item.sender === 'me' &&  item.message!='' && (
								<div className="flex justify-end ">
									<div className="p-4 border-b-2 rounded-md bg-green-300  w-fit">
										{item.message?.toString()}
									</div>
								</div>
							)}
							{item.sender === 'other' && item.message!='' && (
								<div className="flex justify-start">
									<div className="p-4 border-b-2 rounded-md bg-red-300   w-fit">
										{item.message?.toString()}
									</div>
								</div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
})
export default Field;
