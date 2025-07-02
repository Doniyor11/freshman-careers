import { useSignInQuery } from "@/feature/auth/sign-in/api/query.ts"
import { SignInScheme } from "@/feature/auth/sign-in/api/scheme.ts"
import { ISignIn } from "@/feature/auth/sign-in/api/types.ts"
import { yupResolver } from "@hookform/resolvers/yup"
import { ActionIcon, Box, Button, Flex, Text } from "@mantine/core"
import cx from "clsx"
import { Controller, useForm } from "react-hook-form"

import { useAuthorizationStore } from "@/widgets/auth/model"
import s from "@/widgets/auth/ui/styles.module.scss"

import IconClose from "@/shared/assets/images/icon/icon-close.svg"
import { InputFilled } from "@/shared/ui/inputs"
import { PasswordInputFilled } from "@/shared/ui/inputs/password-input-filled"

export const SignIn = () => {
	const [setAuthorization, setModalType] = useAuthorizationStore((s) => [
		s.setAuthorization,
		s.setModalType,
	])

	const {
		control,
		handleSubmit,
		formState: { isDirty, isValid },
	} = useForm<ISignIn>({
		mode: "onChange",
		resolver: yupResolver(SignInScheme),
	})
	const { mutate } = useSignInQuery(() => setAuthorization(false))

	const onSubmit = (data: ISignIn) => {
		mutate({
			username: data?.username,
			password: data.password,
		})
	}

	return (
		<Box w={850} className={s.boxWrapper}>
			<ActionIcon className={s.close} onClick={() => setAuthorization(false)}>
				<IconClose />
			</ActionIcon>
			<h2>
				<span>FRESHMAN CAREERS</span>
				Get full access to platform by subscribing
			</h2>
			<Text className={s.subTitle}>
				Tired of waiting for success to come to you? Take matters into your own
				hands and we'll help you.
			</Text>
			<div className={s.cards}>
				<div className={s.cardLeft}>
					<Text className={s.cardTitle}>Account Login</Text>
					<Text className={s.cardSubtitle}>
						Enter your email and password to log in to your account
					</Text>
					<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
						<Controller
							name={"username"}
							control={control}
							render={({ field }) => (
								<InputFilled height={64} placeholder={"Email"} {...field} />
							)}
						/>

						<Controller
							name={"password"}
							control={control}
							render={({ field }) => (
								<PasswordInputFilled
									height={64}
									mt={16}
									placeholder={"Password"}
									{...field}
								/>
							)}
						/>

						<Flex mb={32} justify={"flex-end"}>
							<Button className={s.forgotPassword}>
								Forgot your password?
							</Button>
						</Flex>
						<Button
							type={"submit"}
							disabled={!isDirty || !isValid}
							className={cx(s.formBtn, s.signIn)}
						>
							Sign In
						</Button>
						<Button
							mt={8}
							className={cx(s.formBtn, s.signUp)}
							onClick={() => setModalType("register")}
						>
							Sign Up
						</Button>
					</form>
				</div>
				<div className={s.cardRight}>
					<Text className={s.cardRightTitle}>85% discount</Text>
					<div className={s.cardDiscount}>
						<Text className={s.discountTitle}>Don’t have subscription?</Text>
						<Text className={s.discountSubtitle}>
							Get access to standard platform features for 6 months
						</Text>
						<Flex mt={24} gap={8} align={"center"}>
							<Text className={s.discountPrice}>$5.99</Text>
							<Box>
								<Text className={s.sup}>for 6 Months</Text>
								<Text className={s.sub}>$47.99</Text>
							</Box>
						</Flex>
						<Button m={"32px 0 8px"} className={cx(s.formBtn, s.signUp)}>
							Sign Up Subscribe
						</Button>
						<Text className={cx(s.discountSubtitle, s.bottom)}>
							$7.99 per month after 6-month offer
						</Text>
					</div>
				</div>
			</div>
		</Box>
	)
}
