import IconClose from "@//shared/assets/images/icon/close.svg"
import {
	ActionIcon,
	Flex,
	MantineSize,
	Modal as ModalCustom,
} from "@mantine/core"
import React, { FC } from "react"

import s from "./modal.module.scss"

interface ModalIProps {
	size?: number | MantineSize | (string & {})
	children?: React.ReactNode
	onClose?: () => void
	opened: boolean
}

export const Modal: FC<ModalIProps> = ({ size, children, onClose, opened }) => {
	return (
		<>
			<ModalCustom
				opened={opened}
				onClose={onClose ?? (() => {})}
				withCloseButton={false}
				classNames={{
					root: s.modalRoot,
					content: s.modalContent,
					overlay: s.modalOverlay,
					header: s.modalHeader,
					body: s.modalBody,
					close: s.modalClose,
				}}
				size={size}
			>
				<Flex justify={"flex-end"}>
					<ActionIcon
						bg={"transparent"}
						className={s.closeButton}
						onClick={onClose ?? (() => {})}
					>
						<IconClose className={s.closeIcon} />
					</ActionIcon>
				</Flex>
				{children}
			</ModalCustom>
		</>
	)
}
