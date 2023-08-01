export interface CourseProgress {
    slug: string;
    finished: boolean;
    name: string;
    lastAccessTime: number;
    id: number;
    progress: number;
    readyToFinish: boolean;
}