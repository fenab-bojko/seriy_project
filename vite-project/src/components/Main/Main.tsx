import React, { FC, useState } from "react";
import "./Main.scss";
import { Header } from "../Header/Header";
import { UserInfo } from "../UserInfo/UserInfo";
import { Filterbar } from "../Filterbar/Filterbar";
import { LessonList } from "../LessonList/LessonList";

interface IMain {
  onFilter: (filter: string) => void;
}

export const Main: FC = () => {
  const [currentCourse, setCurrentCourse] = useState("Дашборд");
  const [courseComplite, setCourseComplite] = useState(0);
  const [allComplite, setAllComplite] = useState(0);
  const [filterInput, setFilterInput] = useState("");
  const [filterSelect, setFilterSelect] = useState("all");
  const [tabs, setTabs] = useState("course");

  const onFilterInput = (filter: string) => {
    setFilterInput(filter);
  };

  const onFilterSelect = (filter: string) => {
    setFilterSelect(filter);
  };

  const onFilterTabs = (filter: string) => {
    setTabs(filter);
  };

  const onCurrentCourse = (course: string) => {
    setCurrentCourse(course);
  };

  const onCourseComplite = (complite: number) => {
    setCourseComplite(complite);
  }

  return (
    <div className="main">
      <Header />
      <UserInfo 
        currentCourse={currentCourse} 
        courseComplite={courseComplite} 
        allComplite={allComplite} 
        />
      <Filterbar
        tabs={tabs}
        onFilterTabs={onFilterTabs}
        onFilterInput={onFilterInput}
        onFilterSelect={onFilterSelect}
        filterInput={filterInput}
      />
      <LessonList
        tabs={tabs}
        filterInput={filterInput}
        onCurrentCourse={onCurrentCourse}
        currentCourse={currentCourse}
        onCourseComplite={onCourseComplite}
      />
    </div>
  );
};

// Подключить Хедер к списку вопросов чтобы работала кнопка и показания пройденого курса
