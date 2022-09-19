import React, { useRef, useState } from "react"
import InputMask from 'react-input-mask';
import axios from "axios"

function FormPhone({ setIsModal, title }) {


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
		messageForm += `<b> </b>\n`
		messageForm += `<b>Интересует: </b> ${title}\n`
		messageForm += `<b>Сообщение: </b> <i>«${message}»</i>\n`
		messageForm += `<b> </b>\n`
		messageForm += `<b>Отправитель: </b> ${name}\n`
		messageForm += `<b>Телефон: </b> ${tel}\n`

		axios.post(uri_api, {
			chat_id,
			parse_mode: 'html',
			text: messageForm,
		})
			.then(data => {
				setIsSendBtn(true)
				setTimeout(() => {
					setIsModal(false)
				}, 2000)
			})
	}



	const beforeMaskedValueChange = (newState, oldState, userInput) => {
		var { value } = newState;
		var selection = newState.selection;
		var cursorPosition = selection ? selection.start : null;

		// keep minus if entered by user
		if (value.endsWith('-') && userInput !== '-' && !tel.endsWith('-')) {
			if (cursorPosition === value.length) {
				cursorPosition--;
				selection = { start: cursorPosition, end: cursorPosition };
			}
			value = value.slice(0, -1);
		}

		return {
			value,
			selection
		};
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
				{/* <input
					type="tel"
					placeholder="Ваш Телефон *"
					name="user_tel"
					autocomplete="tel"
					autofocus="autofocus"
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
				/> */}
				<InputMask
					className="
					ss:w-[47%] 
					xx:w-full
					p-2 bg-inherit
					border-solid 
					border-[1px] 
					border-cyan-400 
					rounded-xl"


					placeholder="Ваш Телефон *"
					mask="+3\7\5 99 999 99 99"
					maskChar={'-'}
					value={tel}
					onChange={(e) => setTel(e.target.value)}
					beforeMaskedValueChange={beforeMaskedValueChange}
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