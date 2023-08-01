import { CourseProgress } from "./CoursesProgress";

export interface Guide {
    id: number;
    code: string;
    name: string;
    url: string;
    lastAccessTime: number;
    kind: string;
    totalCourses: number;
    finishedCourses: number;
    totalSteps: number;
    finishedSteps: number;
    color: string;
    author: string;
    courses?: CourseProgress[];
}
  