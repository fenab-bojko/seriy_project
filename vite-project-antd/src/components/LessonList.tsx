import { FC } from "react";
import { Flex } from "antd";
import { Lesson } from "./Lesson";
import { ILesson } from "../model/answers/data";

type TLessonListProps = {
  courses: ILesson[];
  currentCourse: string;
  onCurrentCourse: (title: string, complite: number) => void;
};

export const LessonList: FC<TLessonListProps> = (props) => {
  const { courses, currentCourse, onCurrentCourse } = props;
  console.dir("lessonList>>>" + courses);

  return (
    <Flex vertical>
      {courses.map((course) => (
        <Lesson key={course.id} course={course} currentCourse={currentCourse} onCurrentCourse={onCurrentCourse} />
      ))}
    </Flex>
  );
};
