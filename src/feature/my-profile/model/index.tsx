import { create } from "zustand"
import { devtools } from "zustand/middleware"

import { IInitialState, IProfileStore } from "./types.ts"

const initialState: IInitialState = {
	modalType: null,
	subscriptionModal: null,
}

export const useProfileStore = create<IProfileStore>()(
	devtools((set) => ({
		...initialState,
		setModalType: (e) => {
			set({ modalType: e })
		},
		setSubscriptionModal: (e) => {
			set({ subscriptionModal: e })
		},
	})),
)
