import clientApi from "@/shared/api/base-api.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

import { IForgotPassword } from "./types.ts"

export const forgotPasswordApi = async (data: IForgotPassword) => {
	const response = await clientApi.post(apiKeys.resetPassword, data)
	return response.data
}
