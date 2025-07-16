import type {StateCreator} from "zustand/vanilla";
import {createWithEqualityFn} from "zustand/traditional";
import {devtools} from "zustand/middleware/devtools";
import type {Course} from "@entities/course/model/course.interface.ts";
import {getCourse} from "@entities/course/api";

export type CourseState = {
    course: Course | null;
}

export type CourseActions = {
    getCourse: (courseId: number) => Promise<void>
}

type createUserStore = StateCreator<CourseState & CourseActions, [['zustand/devtools', never]]>;

const userSlice: createUserStore = (set) => ({
    course: null,
    getCourse: async (courseId: number) => {
        const course = await getCourse(courseId);
        set({course})
    }
})

export const useCourseStore = createWithEqualityFn<CourseState & CourseActions>()(
    devtools(userSlice, {
        name: 'userStore'
    })
)
