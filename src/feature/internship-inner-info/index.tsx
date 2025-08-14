import IconBack from "@//shared/assets/images/icon/chevron_backward5.svg"
import IconClose from "@//shared/assets/images/icon/icon-close.svg"
import { useInternshipInfoStore } from "@/feature/internship-inner-info/submit-internship/model"
import { SubmitInternship } from "@/feature/internship-inner-info/submit-internship/ui"
import {
	ActionIcon,
	Box,
	Container,
	Flex,
	List,
	Modal,
	ScrollArea,
	Text,
} from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useRouter } from "next/router"
import React from "react"

import { useGetInternshipQuery } from "@/entities/internships/query.ts"

import { EnvKeys } from "@/shared/constants/env.ts"
import { FilledButton } from "@/shared/ui/buttons"

import s from "./internship-inner-info.module.scss"

export const InternshipInnerInfo = () => {
	const matches = useMediaQuery("(max-width: 1024px)")
	const params = useParams()
	const router = useRouter()
	const [submitModal, setSubmitModal] = useInternshipInfoStore((s) => [
		s.submitModal,
		s.setSubmitModal,
	])

	const handleClose = () => {
		setSubmitModal(false)
	}

	const { data } = useGetInternshipQuery(Number(params?.id))

	const dataPriceInfo = [
		{
			title: "Payments",
			info: data?.payment_status || "-",
		},
		{
			title: "Education",
			info: data?.education || "-",
		},
		{
			title: "Format",
			info: data?.format || "-",
		},
		{
			title: "Schedule",
			info: data?.schedule || "-",
		},
		{
			title: "Working hours",
			info: data?.working_hours || "-",
		},
		{
			title: "Internship dates",
			info: `${data?.internship_start_date || "-"} - ${
				data?.internship_end_date || "-"
			}`,
		},
	]

	return (
		<Container size={"1440px"} className={s.internshipInnerInfoWrapper}>
			<Flex
				onClick={() => router.push("/profile")}
				align={"center"}
				mb={12}
				p={matches ? "0 2rem" : ""}
			>
				<IconBack />
				<Text className={s.backText}>Go back</Text>
			</Flex>
			<Flex mb={matches ? "1rem" : "2.5rem"} p={matches ? "0 2rem" : ""}>
				<Text component={"h1"} className={s.title}>
					{data?.title}
				</Text>
			</Flex>
			<Flex
				gap={matches ? "1.5rem" : "2rem"}
				direction={matches ? "column-reverse" : "row"}
			>
				{/* 1 */}
				<Flex
					direction={"column"}
					flex={"auto"}
					justify={"space-between"}
					p={matches ? "0 2rem" : ""}
				>
					<Box>
						<Flex gap={"0.69rem"} mb={"0.5rem"} align={"center"}>
							<Image
								src={`${EnvKeys.NEXT_HOST}/${data?.company_image}`}
								alt={"apple"}
								width={42}
								height={42}
								className={s.companyLogo}
								unoptimized
							/>
							<Text component={"p"} className={s.infoText}>
								{data?.company_title}
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
						onClick={() => setSubmitModal(true)}
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
			<Flex
				direction={"column"}
				m={"5rem 0 2.5rem 0"}
				gap={"0.5rem"}
				p={matches ? "0 2rem" : ""}
			>
				<Text component={"p"} className={s.descriptionTitle}>
					Description
				</Text>
				<Text component={"p"} className={s.description}>
					{data?.description || "-"}
				</Text>
			</Flex>
			<Flex
				m={"2.5rem 0 4rem 0"}
				gap={"2.5rem"}
				direction={matches ? "column" : "row"}
				p={matches ? "0 2rem" : ""}
			>
				{/* 1 */}
				<Flex direction={"column"} flex={1} gap={"0.5rem"}>
					<Text component={"p"} className={s.descriptionTitle}>
						Requirements
					</Text>
					<List className={s.list}>
						<List.Item>
							<Text component={"p"} className={s.description}>
								{data?.requirements || "-"}
							</Text>
						</List.Item>
					</List>
				</Flex>
				{/*	2 */}
				<Flex direction={"column"} flex={1} gap={"0.5rem"}>
					<Text component={"p"} className={s.descriptionTitle}>
						Responsibilities
					</Text>
					<List className={s.list}>
						<List.Item>
							<Text component={"p"} className={s.description}>
								{data?.conditions || "-"}
							</Text>
						</List.Item>
					</List>
				</Flex>
			</Flex>
			<Modal
				size={"50rem"}
				opened={submitModal}
				onClose={handleClose}
				withCloseButton={false}
			>
				<div className={s.modalWrapper}>
					<ActionIcon
						className={s.iconClose}
						onClick={handleClose}
						variant={"transparent"}
					>
						<IconClose />
					</ActionIcon>
					<ScrollArea
						h={"calc(100vh - 300px)"}
						type={"hover"}
						offsetScrollbars={"y"}
					>
						<SubmitInternship />
					</ScrollArea>
				</div>
			</Modal>
		</Container>
	)
}
// <Modal
// 	opened={opened}
// 	onClose={handleCloseModal}
// 	size={"50rem"}
// 	centered
// 	withCloseButton={false}
// 	padding={24}
// >
// 	<div className={s.modalWrapper}>
// 		<ActionIcon
// 			className={s.iconClose}
// 			onClick={handleCloseModal}
// 			variant={"transparent"}
// 		>
// 			<IconClose />
// 		</ActionIcon>
// 		<Text component={"h3"} className={s.titleModal}>
// 			Upload document
// 		</Text>
// 		<Text component={"p"} className={s.titleDescription}>
// 			To upload a document, click on the upload button
// 		</Text>
//
// 		{!success ? (
// 			<>
// 				<Dropzone
// 					onDrop={(files) => {
// 						setFile(files)
// 						setUploaded(true)
// 					}}
// 					onReject={(files) => console.log("rejected files", files)}
// 					maxFiles={1}
// 					multiple={false}
// 					// maxSize={10 * 1024 ** 2}
// 					accept={[MIME_TYPES.pdf, MIME_TYPES.doc]}
// 					className={s.dropzone}
// 				>
// 					<Group
// 						gap="xl"
// 						justify="center"
// 						style={{ pointerEvents: "none" }}
// 						mih={300}
// 					>
// 						<Dropzone.Accept>
// 							<ImageModal />
// 						</Dropzone.Accept>
//
// 						<Dropzone.Idle>
// 							{!uploaded ? (
// 								<ImageModal1 />
// 							) : (
// 								<Flex direction={"column"} align={"center"} gap={12}>
// 									<ImageModal />
// 									<Text className={s.imageDesciption}>
// 										{file[0]?.name}
// 									</Text>
// 								</Flex>
// 							)}
// 						</Dropzone.Idle>
// 					</Group>
// 				</Dropzone>
// 				<Flex direction={"column"} gap={"0.75rem"} mt={"4rem"}>
// 					<FilledButton
// 						h={"3.5rem"}
// 						bg={"#004C84"}
// 						onClick={handleUploadFile}
// 						loading={isPending}
// 						disabled={!(file.length > 0)}
// 					>
// 						Upload the document
// 					</FilledButton>
// 					<OutlineButton onClick={handleCloseModal} h={"3.5rem"}>
// 						Cancel
// 					</OutlineButton>
// 				</Flex>
// 			</>
// 		) : (
// 			<div className={s.successBox}>
// 				<Flex direction={"column"}>
// 					<ImageModal />
// 					<Text component={"p"} className={s.imageName}>
// 						{file[0]?.name}
// 					</Text>
// 					<Text component={"p"} className={s.imageDesciption}>
// 						Successfully uploaded
// 					</Text>
// 				</Flex>
// 			</div>
// 		)}
// 	</div>
// </Modal>
