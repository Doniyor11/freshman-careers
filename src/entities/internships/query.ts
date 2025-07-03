import { useQuery } from "@tanstack/react-query"

import { apiKeys } from "@/shared/constants/api-keys.ts"

import { getInternshipsApi } from "./index.ts"

export const useGetInternshipsQuery = () => {
	return useQuery({
		queryFn: () => getInternshipsApi(),
		queryKey: [apiKeys.internships],
		select: (data) => data,
	})
}
