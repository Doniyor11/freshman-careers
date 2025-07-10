export interface IInitialState {
	modalType?: "edit" | "password" | null
}

export interface IProfileStore extends IInitialState {
	setModalType: (modalType?: "edit" | "password" | null) => void
}
