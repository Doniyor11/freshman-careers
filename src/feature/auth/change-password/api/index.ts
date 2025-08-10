import clientApi from "@/shared/api/base-api.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

import { IChangePassword } from "./types.ts"

export const changePasswordApi = async (data: IChangePassword) => {
	const response = await clientApi.post(apiKeys.confirmPasswordReset, data)
	return response.data
}
