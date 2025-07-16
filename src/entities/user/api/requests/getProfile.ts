import type {User} from "../../model";
import {http} from "@shared/api";
import {USER_API} from "../routes.ts";

export const getProfile = async (): Promise<User | null> => {
    const res = await http.get<User>(USER_API.profile)
    if (res.status !== 200) {
        return null
    }

    return res.data
}