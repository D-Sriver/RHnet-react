import React from 'react';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
			<div className="relative mx-auto my-6 w-auto max-w-sm">
				<div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
					<div className="flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5">
						<h3 className="text-3xl font-semibold">Confirmation</h3>
						<button
							className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black opacity-5 outline-none focus:outline-none"
							onClick={onClose}
						>
							<span className="block size-6 bg-transparent text-2xl text-black opacity-5 outline-none focus:outline-none">
								×
							</span>
						</button>
					</div>
					<div className="relative flex-auto p-6">{children}</div>
					<div className="flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">
						<button
							className="background-transparent mb-1 mr-1 px-6 py-2 text-sm font-bold uppercase text-lime-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
							type="button"
							onClick={onClose}
						>
							Fermer
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
