import clientApi from "@/shared/api/base-api.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

import { IEditProfile } from "./types.ts"

export const editProfileApi = async (data: IEditProfile) => {
	const formData = new FormData()

	if (data?.user_update) {
		formData.append("user_update", JSON.stringify(data.user_update))
	}

	if (data.profile_image) {
		formData.append("profile_image", data.profile_image)
	}

	const response = await clientApi.put(apiKeys.userMe, formData)

	return response.data
}
