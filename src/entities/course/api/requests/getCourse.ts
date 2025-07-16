import type {Course} from "../../model";
import {http} from "@shared/api";
import {COURSE_API} from "../routes.ts";

export const getCourse = async (courseId: number): Promise<Course | null> => {
    const course = await http.get(COURSE_API.getCourse(courseId))
    if (course.status !== 200) {
        return null
    }

    return course.data
}