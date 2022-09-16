import React, { useRef, useState } from "react"
import axios from "axios"

function FormPhone({ setIsModal }) {


	const [name, setName] = useState('')
	const [message, setMessage] = useState('')
	const [tel, setTel] = useState('')
	const [isSendBtn, setIsSendBtn] = useState(false)

	const form = useRef()

	const token = '5562126487:AAGqX2TBd3toX15OgSCQ2yW55RNfgtBWQko'
	const chat_id = '-1001794221917'
	const uri_api = `https://api.telegram.org/bot${token}/sendMessage`

	const sendEmail = e => {
		e.preventDefault()
		let messageForm = `<b>Заказ с сайта</b>\n`
		messageForm += `<b>Отправитель: </b> ${name}\n`
		messageForm += `<b>Телефон: </b> ${tel}\n`
		messageForm += `<b>Сообщение: </b> ${message}\n`

		axios.post(uri_api, {
			chat_id,
			parse_mode: 'html',
			text: messageForm,
		}).then(data => {
			setIsSendBtn(true)
			setTimeout(() => {
				setIsModal(false)
			}, 2000)
		})

	}




	return (
		<form ref={form} onSubmit={sendEmail}>
			<div className="w-full flex justify-between mb-5 xy:flex-col ss:flex-row ss:mt-7 xy:mt-4">
				<input
					type="text"
					placeholder="Имя"
					value={name}
					name="user_name"
					className="ss:w-[47%] xx:w-full
					p-2 bg-inherit 
					border-solid 
					border-[1px] 
					border-cyan-400 
					rounded-xl
					xy:mb-3
					ss:mb-0
					"
					onChange={e => setName(e.target.value)}
				/>
				<input
					type="tel"
					placeholder="Ваш Телефон *"
					name="user_email"
					required={true}
					className="
					ss:w-[47%] 
					xx:w-full
					p-2 bg-inherit
					border-solid 
					border-[1px] 
					border-cyan-400 
					rounded-xl"
					value={tel}
					onChange={e => setTel(e.target.value)}
				/>
			</div>
			<textarea
				placeholder="Сообщение (необязательно)"
				value={message}
				name="message"
				className="
				w-full
				xy:h-[7em]
				ss:h-[10em]
				md:h-[15em]
				resize-none 
				p-2 bg-inherit 
				border-solid 
				border-[1px] 
				border-cyan-400 
				rounded-xl
				"
				onChange={e => setMessage(e.target.value)}
			></textarea>
			<input
				type="submit"
				className="
				border-solid
					border-[1px] 
					border-cyan-400 
					rounded-xl 
					text-gradient 
					pt-2 pr-3 pl-3 pb-2
					mt-2 
					float-right
					cursor-pointer	
					hover:border-cyan-600 
						"
				value={!isSendBtn ? "Заказать" : "Заказ отправлен"}
			/>
		</form>
	)
}

export default FormPhone