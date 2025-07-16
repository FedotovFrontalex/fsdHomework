import {EnvConfig} from "@shared/config";

export const COURSE_API = {
    getCourse: (courseId: number) => `${EnvConfig.API_URL}/course/${courseId}`
}