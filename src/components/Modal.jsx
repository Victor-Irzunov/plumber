import React from "react"
import FormPhone from "./FormPhone"

function Modal({ title, isModal, setIsModal }) {


	return (
		<div className={`w-full h-screen bg-filter fixed top-0 right-0 z-[1000] flex justify-center items-center`}>

			<div className='
			border-solid border-2
			border-cyan-400
			relative rounded-xl
			bg-black-gradient-2
			text-white
			w-[66%] 
			h-auto
			p-4
			text-center'>
				<div
					className="
					text-2xl
					text-red-600
					absolute
					top-[-30px]
					right-[-30px]
					cursor-pointer	
					"
					onClick={() => setIsModal(false)}
				>
					❌
				</div>
				<p className="text-gradient text-2xl">{title}</p>
				<FormPhone setIsModal={setIsModal} />
			</div>
		</div>
	)
}

export default Modal