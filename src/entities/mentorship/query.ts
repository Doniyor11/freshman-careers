import { useQuery } from "@tanstack/react-query"

import { apiKeys } from "@/shared/constants/api-keys.ts"

import { getMentorshipsApi } from "./index.ts"

export const useGetMentorshipsQuery = () => {
	return useQuery({
		queryFn: () => getMentorshipsApi(),
		queryKey: [apiKeys.mentorships],
		select: (data) => data,
	})
}

