import { FC, CSSProperties, useState, useCallback } from "react";
import { Layout, Result } from "antd";
import { UserInfo } from "./UserInfo";
import { Filterbar } from "./Filterbar";
import { LessonList } from "./LessonList";
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
  console.log("content>>>render");
  const [currentCourse, setCorrentCourse] = useState("");
  const [compliteCourse, setCompliteCourse] = useState(0);
  const [tabsFilter, setTabsFilter] = useState("1");
  const [selectValue, setSelectValue] = useState("all");
  const [filterLessons, setFilterLessons] = useState(lessons);

  const onTabs = (key: string) => {
    setTabsFilter(key);
  };

  const onSelect = (value: string) => {
    setSelectValue(value);
  };

  const onCurrentCourse = (title: string, complite: number) => {
    setCorrentCourse(title);
    setCompliteCourse(complite);
  };

  const onFilterInput = useCallback((value?: string) => {
    if (!value) setFilterLessons(lessons);
    lessons.map((lesson) => {
      lesson.title.split(" ").map((title) => {
        if (title.toLowerCase() === value.toLowerCase()) {
          const result: ILesson[] = [];
          result.push(lesson);
          setFilterLessons(result);
        } else {
          setFilterLessons(lessons);
        }
      });
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
