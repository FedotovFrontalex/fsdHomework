import axios from "axios";
import { EnvConfig } from "../config";

export const http = axios.create({
    baseURL: EnvConfig.API_URL,
})