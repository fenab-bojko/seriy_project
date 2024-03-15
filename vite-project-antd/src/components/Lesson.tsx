import { FC, CSSProperties, useState } from "react";
import { Button, Flex, Typography } from "antd";
import { ILesson } from "../model/answers/data";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  DownOutlined,
  UpOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";

const lessonStyle: CSSProperties = {
  border: "1px solid gray",
  borderRadius: "4px",
  marginBottom: "10px",
  padding: "10px",
};

type TLessonProps = {
  course: ILesson;
  currentCourse: string;
  onCurrentCourse: (title: string, complite: number) => void;
};

export const Lesson: FC<TLessonProps> = (props) => {
  const { course, onCurrentCourse, currentCourse } = props;
  const [isActiveLesson, setIsActiveLesson] = useState(false);

  const onHandlerClick = () => {
    onCurrentCourse(course.title, course.complite);
  };

  const toggleActiveLesson = () => {
    setIsActiveLesson((prev) => !prev);
  };

  return (
    <Flex className="lesson" vertical gap={20} justify="center" align="start" style={lessonStyle}>
      <Flex
        className="lesson__header"
        style={{ cursor: "pointer", width: "100%" }}
        justify="space-between"
        onClick={toggleActiveLesson}
      >
        <Flex className="lesson__header_title" justify="left">
          {course.complite === 100 ? <CheckCircleOutlined /> : <ClockCircleOutlined color="gray" />}
          <Typography.Title level={4} style={{ margin: "0" }}>
            {course.title}
          </Typography.Title>
        </Flex>
        {isActiveLesson ? <UpOutlined color="gray" width="4em" /> : <DownOutlined color="gray" width="4em" />}
      </Flex>
      {isActiveLesson ? (
        <Flex className="lesson__main" vertical gap={10} align="start" style={{ padding: "5px" }}>
          <Flex className="lesson__main_description" gap={10}>
            <Typography.Title style={{ textWrap: "nowrap" }} level={5}>
              Информация о курсе:{" "}
            </Typography.Title>
            <Typography.Paragraph style={{ textAlign: "start" }}>{course.description}</Typography.Paragraph>
          </Flex>
          <Flex className="lesson__main_passageTime" gap={10}>
            <Typography.Title level={5} style={{ textAlign: "start" }}>
              Время прохождения:{" "}
            </Typography.Title>
            <Typography.Text>{course.passageTime}</Typography.Text>
          </Flex>

          {course.complite || currentCourse === course.title ? (
            <Flex gap={10}>
              <Button>Начать сначала</Button>
              <Button color="#4096ff" onClick={onHandlerClick}>
                Продолжить обучение <CaretRightOutlined />
              </Button>
            </Flex>
          ) : (
            <Button onClick={onHandlerClick}>
              Запустить тур <CaretRightOutlined />
            </Button>
          )}
        </Flex>
      ) : null}
    </Flex>
  );
};
