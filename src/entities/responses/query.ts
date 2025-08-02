import { useQuery } from "@tanstack/react-query"

import { apiKeys } from "@/shared/constants/api-keys.ts"

import { getResponsesApi } from "./index.ts"

export const useGetResponsesQuery = () => {
	return useQuery({
		queryFn: () => getResponsesApi(),
		queryKey: [apiKeys.responses],
		select: (data) => data,
	})
}
