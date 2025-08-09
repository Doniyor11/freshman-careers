import { Box, Container } from "@mantine/core"
import React from "react"

import { Banner, TitleHead } from "@/shared/ui"

import s from "./webinar.module.scss"

export const Webinar = () => {
	return (
		<Container size={"1440px"}>
			<Box className={s.webinarWrapper}>
				<TitleHead
					info={"WEBINAR"}
					title={"Webinar"}
					description={
						"Professionals who are always ready to help you through your difficulties"
					}
				/>
				<Box className={s.webinarVideoWrapper}>
					<video
						className={s.webinarVideo}
						src="https://www.youtube.com/watch?v=2g6j1b8a4e0"
						controls
						poster="https://i.ytimg.com/vi/2g6j1b8a4e0/maxresdefault.jpg"
						// width and height are used to set the size of the video
						width="100%"
						height="100%"
						// controls attribute is used to show the video controls
						controlsList="nodownload"
						disablePictureInPicture
						disableRemotePlayback
						// playsInline attribute is used to play the video inline
						playsInline
						// preload attribute is used to preload the video
						preload="metadata"
						// muted attribute is used to mute the video
						muted
						// loop attribute is used to loop the video
						loop
					/>
				</Box>
				<Banner />
			</Box>
		</Container>
	)
}
