import { FC, CSSProperties, useState, useCallback } from "react";
import { Layout } from "antd";
import { UserInfo } from "./UserInfo";
import { Filterbar, TFilterbarProps } from "./Filterbar";
import { LessonList, TLessonListProps } from "./LessonList";
import { ILesson, lessons } from "../model/answers/data";
import { TerminList } from "./TerminList";

const contentStyle: CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  padding: "5px",
};

export const Content: FC = () => {
  const [currentCourse, setCorrentCourse] = useState("");
  const [compliteCourse, setCompliteCourse] = useState(0);
  const [tabsFilter, setTabsFilter] = useState("1");
  const [selectValue, setSelectValue] = useState("all");
  const [filterLessons, setFilterLessons] = useState(lessons);

  const onTabs: TFilterbarProps["onTabs"] = (key) => {
    setTabsFilter(key);
  };

  const onSelect: TFilterbarProps["onSelect"] = (value) => {
    setSelectValue(value);
  };

  const onCurrentCourse: TLessonListProps["onCurrentCourse"] = (title, complite) => {
    setCorrentCourse(title);
    setCompliteCourse(complite);
  };

  const onFilterInput: TFilterbarProps["onFilterInput"] = useCallback((value) => {
    const result: ILesson[] = [];
    const regExp = new RegExp(/[,.!?;:()-]/);
    if (!value) setFilterLessons(lessons);
    lessons.map((lesson) => {
      lesson.title.split(" ").map((title) => {
        if (regExp.test(title.slice(-1))) {
          title = title.substring(0, title.length - 1);
        }
        if (title.toLowerCase() === value?.toLowerCase()) {
          result.push(lesson);
        }
      });
      {
        result.length ? setFilterLessons(result) : setFilterLessons(lessons);
      }
    });
  }, []);

  return (
    <Layout.Content style={contentStyle}>
      <UserInfo compliteCourse={compliteCourse} currentCourse={currentCourse} />
      <Filterbar
        onTabs={onTabs}
        currentTabs={tabsFilter}
        selectValue={selectValue}
        onSelect={onSelect}
        onFilterInput={onFilterInput}
      />
      {tabsFilter === "1" ? (
        <LessonList courses={filterLessons} currentCourse={currentCourse} onCurrentCourse={onCurrentCourse} />
      ) : (
        <TerminList />
      )}
    </Layout.Content>
  );
};
