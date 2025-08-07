import clientApi from "@/shared/api/base-api.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

import { IConfirmationCode } from "./types.ts"

export const confirmationCodeApi = async (data: IConfirmationCode) => {
	const response = await clientApi.post(apiKeys.confirmationCode, data)
	return response.data
}
