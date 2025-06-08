export type EnvConfigType = {
    API_URL: string;
}

export const EnvConfig: EnvConfigType = {
    API_URL:  import.meta.env.VITE_API_URL,
}