export type EnvConfigType = {
    API_URL: string;
}

export const EnvConfig: EnvConfigType = {
    API_URL:  import.meta.env.API_URL,
}