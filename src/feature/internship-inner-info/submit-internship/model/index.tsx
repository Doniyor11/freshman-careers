import { create } from "zustand"
import { devtools } from "zustand/middleware"

import { IInitialState, IInternshipInfoStore } from "./types.ts"

const initialState: IInitialState = {
	submitModal: false,
}

export const useInternshipInfoStore = create<IInternshipInfoStore>()(
	devtools((set) => ({
		...initialState,
		setSubmitModal: (e) => {
			set({ submitModal: e })
		},
	})),
)
