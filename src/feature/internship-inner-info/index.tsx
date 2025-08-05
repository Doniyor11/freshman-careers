import IconBack from "@//shared/assets/images/icon/chevron_backward5.svg"
import { useInternshipInfoStore } from "@/feature/internship-inner-info/submit-internship/model"
import { SubmitInternship } from "@/feature/internship-inner-info/submit-internship/ui"
import {
	ActionIcon,
	Box,
	Container,
	Flex,
	List,
	Modal,
	Text,
} from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useRouter } from "next/router"

import { useGetInternshipQuery } from "@/entities/internships/query.ts"

import IconClose from "@/shared/assets/images/icon/icon-close.svg"
import { EnvKeys } from "@/shared/constants/env.ts"
import { FilledButton } from "@/shared/ui/buttons"

import s from "./internship-inner-info.module.scss"

export const InternshipInnerInfo = () => {
	const matches = useMediaQuery("(max-width: 1024px)")
	const router = useRouter()
	const [submitModal, setSubmitModal] = useInternshipInfoStore((s) => [
		s.submitModal,
		s.setSubmitModal,
	])

	const handleOpenModal = () => {
		setSubmitModal(true)
	}
	const handleCloseModal = () => {
		setSubmitModal(false)
	}

	const params = useParams()
	const { data } = useGetInternshipQuery(Number(params?.id))

	const dataPriceInfo = [
		{
			title: "Payments",
			info: data?.payment_status,
		},
		{
			title: "Education",
			info: data?.education,
		},
		{
			title: "Format",
			info: data?.format,
		},
		{
			title: "Schedule",
			info: data?.schedule,
		},
		{
			title: "Working hours",
			info: data?.working_hours,
		},
		{
			title: "Internship dates",
			info: `${data?.internship_start_date} - ${data?.internship_end_date}`,
		},
	]

	return (
		<Container size={"1440px"} className={s.internshipInnerInfoWrapper}>
			<Flex onClick={() => router.push("/profile")} align={"center"} mb={12} p={
				matches ? "0 2rem" : ""
			}>
				<IconBack />
				<Text className={s.backText}>Go back</Text>
			</Flex>
			<Flex mb={matches ? "1rem" : "2.5rem"} p={
				matches ? "0 2rem" : ""
			}>
				<Text component={"h1"} className={s.title}>
					{data?.title}
				</Text>
			</Flex>
			<Flex
				gap={matches ? "1.5rem" : "2rem"}
				direction={matches ? "column-reverse" : "row"}
			>
				{/* 1 */}
				<Flex direction={"column"} flex={"auto"} justify={"space-between"} p={
					matches ? "0 2rem" : ""
				}>
					<Box>
						<Flex gap={"0.69rem"} mb={"0.5rem"} align={"center"}>
							<Image
								src={`${data?.company?.image}`}
								alt={"apple"}
								width={42}
								height={42}
								className={s.companyLogo}
								unoptimized
							/>
							<Text component={"p"} className={s.infoText}>
								{data?.company?.name}
							</Text>
						</Flex>
						<Flex mb={"2rem"}>
							<Text component={"p"} className={s.priceText}>
								{data?.salary}
							</Text>
						</Flex>
						<Flex direction={"column"} gap={"0.5rem"}>
							{dataPriceInfo?.map((item, index) => (
								<Text component={"p"} className={s.priceInfoText} key={index}>
									{item.title}: <b>{item.info}</b>
								</Text>
							))}
						</Flex>
					</Box>
					<FilledButton
						fullWidth
						h={"3.5rem"}
						onClick={handleOpenModal}
						mt={matches ? "1.5rem" : "auto"}
					>
						Submit an application
					</FilledButton>
				</Flex>
				{/* 2 */}
				<Box className={s.imageWrapper}>
					<Image
						src={`${EnvKeys.NEXT_HOST}/${data?.picture}`}
						alt={""}
						width={850}
						height={515}
						unoptimized
					/>
				</Box>
			</Flex>
			{/* ----------------- Bottom info ----------------- */}
			<Flex direction={"column"} m={"5rem 0 2.5rem 0"} gap={"0.5rem"} p={
				matches ? "0 2rem" : ""
			}>
				<Text component={"p"} className={s.descriptionTitle}>
					Description
				</Text>
				<Text component={"p"} className={s.description}>
					{data?.description}
				</Text>
			</Flex>
			<Flex
				m={"2.5rem 0 4rem 0"}
				gap={"2.5rem"}
				direction={matches ? "column" : "row"}
				p={
					matches ? "0 2rem" : ""
				}
			>
				{/* 1 */}
				<Flex direction={"column"} flex={1} gap={"0.5rem"}>
					<Text component={"p"} className={s.descriptionTitle}>
						Requirements
					</Text>
					<List className={s.list}>
						<List.Item>
							<Text component={"p"} className={s.description}>
								{data?.requirements}
							</Text>
						</List.Item>
					</List>
				</Flex>
				{/*	2 */}
				<Flex direction={"column"} flex={1} gap={"0.5rem"}>
					<Text component={"p"} className={s.descriptionTitle}>
						Terms and conditions
					</Text>
					<List className={s.list}>
						<List.Item>
							<Text component={"p"} className={s.description}>
								{data?.conditions}
							</Text>
						</List.Item>
					</List>
				</Flex>
			</Flex>
			{/* Modal Upload document	*/}
			<Modal
				opened={submitModal}
				onClose={handleCloseModal}
				size={"50rem"}
				centered
				withCloseButton={false}
				padding={24}
			>
				<div className={s.modalWrapper}>
					<ActionIcon
						className={s.iconClose}
						onClick={handleCloseModal}
						variant={"transparent"}
					>
						<IconClose />
					</ActionIcon>
					<Text component={"h3"} className={s.titleModal}>
						Uzbekistan's Club Internship
					</Text>
					{/*<Text component={"p"} className={s.titleDescription}>*/}
					{/*	To upload a document, click on the upload button*/}
					{/*</Text>*/}
					<SubmitInternship />
				</div>
			</Modal>
		</Container>
	)
}

//
// {!success ? (
// 	<>
// 		<Dropzone
// 			onDrop={(files) => {
// 				setFile(files)
// 				setUploaded(true)
// 			}}
// 			onReject={(files) => console.log("rejected files", files)}
// 			maxFiles={1}
// 			multiple={false}
// 			// maxSize={10 * 1024 ** 2}
// 			accept={[MIME_TYPES.pdf, MIME_TYPES.doc]}
// 			className={s.dropzone}
// 		>
// 			<Group
// 				gap="xl"
// 				justify="center"
// 				style={{ pointerEvents: "none" }}
// 				mih={300}
// 			>
// 				<Dropzone.Accept>
// 					<ImageModal />
// 				</Dropzone.Accept>
//
// 				<Dropzone.Idle>
// 					{!uploaded ? (
// 						<ImageModal1 />
// 					) : (
// 						<Flex direction={"column"} align={"center"} gap={12}>
// 							<ImageModal />
// 							<Text className={s.imageDesciption}>
// 								{file[0]?.name}
// 							</Text>
// 						</Flex>
// 					)}
// 				</Dropzone.Idle>
// 			</Group>
// 		</Dropzone>
// 		<Flex direction={"column"} gap={"0.75rem"} mt={"4rem"}>
// 			<FilledButton
// 				h={"3.5rem"}
// 				bg={"#004C84"}
// 				onClick={handleUploadFile}
// 				loading={isPending}
// 				disabled={!(file.length > 0)}
// 			>
// 				Upload the document
// 			</FilledButton>
// 			<OutlineButton onClick={handleCloseModal} h={"3.5rem"}>
// 				Cancel
// 			</OutlineButton>
// 		</Flex>
// 	</>
// ) : (
// 	<div className={s.successBox}>
// 		<Flex direction={"column"}>
// 			<ImageModal />
// 			<Text component={"p"} className={s.imageName}>
// 				{file[0]?.name}
// 			</Text>
// 			<Text component={"p"} className={s.imageDesciption}>
// 				Successfully uploaded
// 			</Text>
// 		</Flex>
// 	</div>
// )}
