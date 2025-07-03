import clientApi from "@/shared/api/base-api.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

import { ISignIn } from "./types.ts"

export const signInApi = async (data: ISignIn) => {
	const response = await clientApi.post(apiKeys.signIn, data)
	return response.data
}
