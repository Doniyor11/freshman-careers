import { useQuery } from "@tanstack/react-query"

import { apiKeys } from "@/shared/constants/api-keys.ts"

import { getAccountSuccessApi } from "./index.ts"

export const useGetAccountSuccessQuery = () => {
	return useQuery({
		queryFn: getAccountSuccessApi,
		queryKey: [apiKeys.accountSuccess],
		select: (data) => data,
	})
}
