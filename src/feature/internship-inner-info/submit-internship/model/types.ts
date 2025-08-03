export interface IInitialState {
	submitModal: boolean
}

export interface IInternshipInfoStore extends IInitialState {
	setSubmitModal: (submitModal: boolean) => void
}
