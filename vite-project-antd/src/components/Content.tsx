import { FC, CSSProperties, useState, useCallback, useEffect } from "react";
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

type TLessonFilter = {
  selectValue?: string;
  inputValue?: string;
};

export const Content: FC = () => {
  const [currentCourse, setCorrentCourse] = useState("");
  const [compliteCourse, setCompliteCourse] = useState(0);
  const [tabsFilter, setTabsFilter] = useState("1");
  const [filterLessons, setFilterLessons] = useState(lessons);
  const [lessonFilter, setLessonFilter] = useState<TLessonFilter>({});

  const onTabs: TFilterbarProps["onTabs"] = useCallback((key) => {
    setTabsFilter(key);
  }, [])

  const onCurrentCourse: TLessonListProps["onCurrentCourse"] = useCallback((title, complite) => {
    setCorrentCourse(title);
    setCompliteCourse(complite);
  }, [])
  //
  const onFilter: TFilterbarProps["onFilter"] = useCallback(
    (selectValue, inputValue) => {
      const newLessonFilter = { ...lessonFilter };
      if (selectValue) newLessonFilter.selectValue = selectValue;
      if (inputValue) newLessonFilter.inputValue = inputValue;
      setLessonFilter(newLessonFilter);
    },[lessonFilter]
  );

  useEffect(() => {
    const newFilterLessons = lessons
      .filter((lesson) => {
        if (lessonFilter.selectValue === "all") return true; //TODO значение selectValue должно браться из фильтербар
        if (lessonFilter.selectValue === "passed") return lesson.complite === 100;
        if (lessonFilter.selectValue === "new") return lesson.complite !== 100;
        return true;
      })
      .filter((lesson) => {
        if (!lessonFilter.inputValue) return true;
        return lesson.title.toLowerCase().includes(lessonFilter.inputValue.toLowerCase());
      });
    setFilterLessons(newFilterLessons);
  }, [lessonFilter]);
  return (
    <Layout.Content style={contentStyle}>
      <UserInfo compliteCourse={compliteCourse} currentCourse={currentCourse} />
      <Filterbar onTabs={onTabs} currentTabs={tabsFilter} onFilter={onFilter} />
      {tabsFilter === "1" ? (
        <LessonList courses={filterLessons} currentCourse={currentCourse} onCurrentCourse={onCurrentCourse} />
      ) : (
        <TerminList />
      )}
    </Layout.Content>
  );
};
