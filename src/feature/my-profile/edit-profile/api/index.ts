import clientApi from "@/shared/api/base-api.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

import { IEditProfile } from "./types.ts"

export const editProfileApi = async (data: IEditProfile) => {
	const formData = new FormData()

	formData.append("email", data?.email)
	formData.append("login", data?.login)
	formData.append("phone_number", data?.phone_number)
	if (data?.profile_image) {
		formData.append("profile_image", data?.profile_image)
	}

	const response = await clientApi.put(apiKeys.userMe, formData)
	return response.data
}
