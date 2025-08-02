import { Button, FileButton, Flex, Input, Text } from "@mantine/core"
import cx from "clsx"
import { useState } from "react"

import IconUpload from "@/shared/assets/images/icon/upload.svg"

import s from "./styles.module.scss"

export const SubmitInternship = () => {
	const [file, setFile] = useState<File | null>(null)

	return (
		<form>
			<Input.Wrapper className={s.inputWrapper} required label={"Full Name"}>
				<Input placeholder={"My answer"} />
			</Input.Wrapper>
			<Input.Wrapper className={s.inputWrapper} required label={"Email"}>
				<Input placeholder={"My answer"} type={"email"} />
			</Input.Wrapper>
			<Input.Wrapper
				className={s.inputWrapper}
				required
				label={"Mobile Number"}
			>
				<Input placeholder={"My answer"} />
			</Input.Wrapper>
			<Input.Wrapper
				className={s.inputWrapper}
				required
				label={"Where do you currently study?"}
			>
				<Input placeholder={"My answer"} />
			</Input.Wrapper>
			<Input.Wrapper
				className={s.inputWrapper}
				required
				label={"What languages do you speak, and at what level?"}
				description={
					"Please list each language and your proficiency level. For example: Native, Fluent, Intermediate, or Beginner. If you’ve taken any official language exams like IELTS, TOEFL, or CEFR, please include your score and the year you took the test.\n" +
					"How"
				}
			>
				<Input placeholder={"My answer"} />
			</Input.Wrapper>

			<Input.Wrapper
				className={s.inputWrapper}
				required
				label={
					"How will taking this internship help you advance your future goals? (150 words or more)"
				}
				description={
					"Feel free to share your career interests, academic goals, or personal development aspirations and how this internship connects to them."
				}
			>
				<Input placeholder={"My answer"} />
			</Input.Wrapper>

			<Input.Wrapper
				className={s.inputWrapper}
				required
				label={
					"What specific skills or past experiences do you have that will help you contribute to this internship position? (150 words or more)"
				}
				description={
					"Please describe any relevant school projects, extracurricular activities, personal interests, or past work that prepared you for this role."
				}
			>
				<Input placeholder={"My answer"} />
			</Input.Wrapper>

			<Input.Wrapper
				className={s.inputWrapper}
				required
				label={
					"Are there any additional circumstances we should consider while reviewing your application?"
				}
				description={
					"This could include personal challenges, financial constraints, limited access to certain resources, or anything else you'd like us to be aware of."
				}
			>
				<Input placeholder={"My answer"} />
			</Input.Wrapper>

			<Input.Wrapper
				className={s.inputWrapper}
				required
				label={"Attach your CV (pdf)"}
				description={
					"Upload 1 file of supported type. File size – no more than 10 MB."
				}
			>
				<FileButton onChange={setFile} accept="application/pdf">
					{(props) => (
						<Flex align={"center"} gap={12} mt={8}>
							<Button
								leftSection={<IconUpload />}
								className={cx(s.fileBtn, { [s.success]: !!file })}
								{...props}
							>
								Add file
							</Button>

							{file && (
								<Text className={s.fileLabel}>Picked file: {file.name}</Text>
							)}
						</Flex>
					)}
				</FileButton>
			</Input.Wrapper>

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
				<FileButton onChange={setFile} accept="application/pdf">
					{(props) => (
						<Flex align={"center"} gap={12} mt={8}>
							<Button
								leftSection={<IconUpload />}
								className={cx(s.fileBtn, { [s.success]: !!file })}
								{...props}
							>
								Add file
							</Button>

							{file && (
								<Text className={s.fileLabel}>Picked file: {file.name}</Text>
							)}
						</Flex>
					)}
				</FileButton>
			</Input.Wrapper>
			<Flex align={"center"} gap={16} mt={24}>
				<Button className={cx(s.btnSubmit, s.btnSend)}>Send</Button>
				<Button
					className={cx(s.btnSubmit, s.btnClear)}
					onClick={() => {
						setFile(null)
					}}
				>
					Clear fields
				</Button>
			</Flex>
		</form>
	)
}
