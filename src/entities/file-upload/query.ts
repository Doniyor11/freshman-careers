import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { uploadFileApi } from "./index.ts"
import { IFileUpload } from "./types.ts"

export const useUploadFileQuery = (onSuccess: () => void) => {
	return useMutation({
		mutationFn: (data: IFileUpload) => uploadFileApi(data),
		onSuccess: (data) => {
			toast.success(data?.message)
			onSuccess && onSuccess()
		},
		onError: (data: any) => {
			toast.error(data?.detail)
		},
	})
}
