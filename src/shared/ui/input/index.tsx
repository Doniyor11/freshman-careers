import { TextInput } from "@mantine/core"
import React, { FC, useState } from "react"
import Eye from "@//shared/assets/images/icon/eye.svg"
import EyeOff from "@//shared/assets/images/icon/eye-slash.svg"
import s from "./input.module.scss"

interface InputIProps {
	label?: string
	labelProps?: React.ComponentPropsWithoutRef<"label">
	onFocus?: () => void
	onBlur?: () => void
	value?: string
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
	type?: React.HTMLInputTypeAttribute
}

export const Input:FC<InputIProps> = ({type, label}) => {
	const [value, setValue] = useState("")
	const [focused, setFocused] = useState(false)
	const [showPassword, setShowPassword] = useState(false)
	const floating = focused || value.length > 0 || undefined
	return (
		<>
			<TextInput
				label={label}
				labelProps={{ "data-floating": floating }}
				classNames={{
					root: s.root,
					input: `${s.input} ${floating ? s.inputFloating : ""}`,
					label: s.label,
				}}
				onFocus={() => setFocused(true)}
				onBlur={() => setFocused(false)}
				value={value}
				onChange={(event) => setValue(event.currentTarget.value)}
				type={type === "password" && showPassword ? "text" : type}
				rightSection={
					type === "password" ? (
						<button
							type="button"
							className={s.eyeButton}
							onClick={() => setShowPassword((prev) => !prev)} // переключение видимости пароля

							tabIndex={-1}
						>
							{showPassword ? <Eye/> : <EyeOff/>}
						</button>
					) : null
				}
			/>
		</>
	)
}
