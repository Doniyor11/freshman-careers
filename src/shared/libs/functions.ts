const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB

export const handleFileUpload = (
	file: File | null,
	onValid: (file: File) => void,
	options?: { maxSize?: number; onError?: (msg: string) => void },
) => {
	const sizeLimit = options?.maxSize || MAX_FILE_SIZE
	const showError = options?.onError || ((msg) => alert(msg)) // fallback error handler

	if (!file) return

	if (file.size > sizeLimit) {
		showError("File size must be less than 10MB.")
		return
	}

	onValid(file)
}

export const functions = (date: string) => {
	return new Date(date).toLocaleString()
}
