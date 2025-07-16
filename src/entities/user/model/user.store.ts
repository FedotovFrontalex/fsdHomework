import type {User} from "./user.interface.ts";
import type {StateCreator} from "zustand/vanilla";
import {createWithEqualityFn} from "zustand/traditional";
import {devtools} from "zustand/middleware/devtools";
import {getProfile} from "@entities/user/api";

export type UserState = {
    profile: User | null;
}

export type UserActions = {
    getProfile: () => Promise<void>
}

type createUserStore = StateCreator<UserState & UserActions, [['zustand/devtools', never]]>;

const userSlice: createUserStore = (set) => ({
    profile: null,
    getProfile: async () => {
        const profile = await getProfile();
        set({profile})
    }
})

export const useUserStore = createWithEqualityFn<UserState & UserActions>()(
    devtools(userSlice, {
        name: 'userStore'
    })
)
