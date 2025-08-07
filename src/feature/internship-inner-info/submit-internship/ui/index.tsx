import { useSubmitQuery } from "@/feature/internship-inner-info/submit-internship/api/query.ts"
import { SubmitScheme } from "@/feature/internship-inner-info/submit-internship/api/scheme.ts"
import { ISubmit } from "@/feature/internship-inner-info/submit-internship/api/types.ts"
import { useInternshipInfoStore } from "@/feature/internship-inner-info/submit-internship/model"
import { yupResolver } from "@hookform/resolvers/yup"
import { Button, FileButton, Flex, Input, Text } from "@mantine/core"
import cx from "clsx"
import { useParams } from "next/navigation"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { toast } from "react-toastify"

import IconUpload from "@/shared/assets/images/icon/upload.svg"
import { handleFileUpload } from "@/shared/libs/functions.ts"

import s from "./styles.module.scss"

export const SubmitInternship = () => {
	const params = useParams()
	const setSubmitModal = useInternshipInfoStore((s) => s.setSubmitModal)

	const [cvFile, setCvFile] = useState<File | null>(null)
	const [documents, setDocuments] = useState<File | null>(null)

	const {
		reset,
		control,
		handleSubmit,
		formState: { isDirty, isValid, errors },
	} = useForm<ISubmit>({
		mode: "all",
		resolver: yupResolver(SubmitScheme),
	})

	const { mutate, isPending } = useSubmitQuery(() => {
		setSubmitModal(false)
		reset({})
	})

	const onSubmit = (data: ISubmit) => {
		mutate({
			...data,
			internship_id: Number(params?.id),
			cv: cvFile ? cvFile : undefined,
			supporting_documents: documents ? documents : undefined,
		})
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Controller
				name={"full_name"}
				control={control}
				render={({ field }) => (
					<Input.Wrapper
						required
						label={"Full Name"}
						className={s.inputWrapper}
						error={errors?.full_name?.message}
					>
						<Input placeholder={"My answer"} {...field} />
					</Input.Wrapper>
				)}
			/>

			<Controller
				name={"email"}
				control={control}
				render={({ field }) => (
					<Input.Wrapper
						className={s.inputWrapper}
						required
						label={"Email"}
						error={errors?.email?.message}
					>
						<Input placeholder={"My answer"} type={"email"} {...field} />
					</Input.Wrapper>
				)}
			/>

			<Controller
				name={"phone_number"}
				control={control}
				render={({ field }) => (
					<Input.Wrapper
						required
						className={s.inputWrapper}
						label={"Mobile Number"}
						error={errors?.phone_number?.message}
					>
						<Input placeholder={"My answer"} type={"number"} {...field} />
					</Input.Wrapper>
				)}
			/>

			<Controller
				name={"current_study"}
				control={control}
				render={({ field }) => (
					<Input.Wrapper
						required
						className={s.inputWrapper}
						error={errors?.current_study?.message}
						label={"Where do you currently study?"}
					>
						<Input placeholder={"My answer"} {...field} />
					</Input.Wrapper>
				)}
			/>

			<Controller
				name={"languages"}
				control={control}
				render={({ field }) => (
					<Input.Wrapper
						required
						className={s.inputWrapper}
						error={errors?.languages?.message}
						label={"What languages do you speak, and at what level?"}
						description={
							"Please list each language and your proficiency level. For example: Native, Fluent, Intermediate, or Beginner. If you’ve taken any official language exams like IELTS, TOEFL, or CEFR, please include your score and the year you took the test.\n" +
							"How"
						}
					>
						<Input placeholder={"My answer"} {...field} />
					</Input.Wrapper>
				)}
			/>

			<Controller
				name={"future_goals"}
				control={control}
				render={({ field }) => (
					<Input.Wrapper
						required
						className={s.inputWrapper}
						error={errors?.future_goals?.message}
						label={
							"How will taking this internship help you advance your future goals? (150 words or more)"
						}
						description={
							"Feel free to share your career interests, academic goals, or personal development aspirations and how this internship connects to them."
						}
					>
						<Input placeholder={"My answer"} {...field} />
					</Input.Wrapper>
				)}
			/>

			<Controller
				name={"past_experience"}
				control={control}
				render={({ field }) => (
					<Input.Wrapper
						required
						className={s.inputWrapper}
						error={errors?.past_experience?.message}
						label={
							"What specific skills or past experiences do you have that will help you contribute to this internship position? (150 words or more)"
						}
						description={
							"Please describe any relevant school projects, extracurricular activities, personal interests, or past work that prepared you for this role."
						}
					>
						<Input placeholder={"My answer"} {...field} />
					</Input.Wrapper>
				)}
			/>

			<Controller
				name={"additional_circumstances"}
				control={control}
				render={({ field }) => (
					<Input.Wrapper
						required
						className={s.inputWrapper}
						error={errors?.additional_circumstances?.message}
						label={
							"Are there any additional circumstances we should consider while reviewing your application?"
						}
						description={
							"This could include personal challenges, financial constraints, limited access to certain resources, or anything else you'd like us to be aware of."
						}
					>
						<Input placeholder={"My answer"} {...field} />
					</Input.Wrapper>
				)}
			/>

			<Controller
				name={"cv"}
				control={control}
				render={({ field }) => (
					<Input.Wrapper
						required
						className={s.inputWrapper}
						label={"Attach your CV (pdf)"}
						description={
							"Upload 1 file of supported type. File size – no more than 10 MB."
						}
					>
						<FileButton
							onChange={(file) =>
								handleFileUpload(
									file,
									(f) => {
										setCvFile(f)
										field.onChange(f)
									},
									{ onError: (msg) => toast.error(msg) },
								)
							}
							accept="application/pdf"
						>
							{(props) => (
								<Flex align={"center"} gap={12} mt={8}>
									<Button
										leftSection={<IconUpload />}
										className={cx(s.fileBtn, { [s.success]: !!cvFile })}
										{...props}
									>
										Add file
									</Button>

									{cvFile && (
										<Text className={s.fileLabel}>
											Picked file: {cvFile.name}
										</Text>
									)}
								</Flex>
							)}
						</FileButton>
					</Input.Wrapper>
				)}
			/>

			<Controller
				name={"supporting_documents"}
				control={control}
				render={({ field }) => (
					<Input.Wrapper
						className={s.inputWrapper}
						required
						label={
							"Attach other supporting documents (IELTS certificates, awards, recommendation letters, etc.) "
						}
						description={
							"Upload 1 file of supported type. File size – no more than 10 MB."
						}
					>
						<FileButton
							onChange={(file) =>
								handleFileUpload(
									file,
									(f) => {
										setDocuments(f)
										field.onChange(f)
									},
									{ onError: (msg) => toast.error(msg) },
								)
							}
							accept="application/pdf"
						>
							{(props) => (
								<Flex align={"center"} gap={12} mt={8}>
									<Button
										leftSection={<IconUpload />}
										className={cx(s.fileBtn, { [s.success]: !!documents })}
										{...props}
									>
										Add file
									</Button>

									{documents && (
										<Text className={s.fileLabel}>
											Picked file: {documents.name}
										</Text>
									)}
								</Flex>
							)}
						</FileButton>
					</Input.Wrapper>
				)}
			/>

			<Flex align={"center"} gap={16} mt={24}>
				<Button
					type={"submit"}
					loading={isPending}
					disabled={!isDirty || !isValid}
					className={cx(s.btnSubmit, s.btnSend)}
				>
					Send
				</Button>
				<Button
					className={cx(s.btnSubmit, s.btnClear)}
					onClick={() => {
						setDocuments(null)
						setCvFile(null)
						reset({})
					}}
				>
					Clear fields
				</Button>
			</Flex>
		</form>
	)
}
