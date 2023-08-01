import { CourseProgress } from './CoursesProgress';
import { Guide } from './Guide';
export interface APIResponse {
  id: number;
  courseProgresses: CourseProgress[];
  guides: Guide[];
}