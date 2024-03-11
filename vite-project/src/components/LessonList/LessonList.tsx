import React, { FC } from "react";
import "./LessonList.scss";
import { lessons } from "../../lib/data";
import { Button } from "../Button/Button";
import openCloseIcon from '../../assets/icon/openCloseIcon.svg';

interface ILessonList {
  tabs: string;
  filterInput: string;
  onCurrentCourse: (course: string) => void;
  currentCourse: string;
  onCourseComplite: (complite: number) => void;
}

export const LessonList: FC<ILessonList> = (props) => {
  const { tabs, filterInput, onCurrentCourse, currentCourse, onCourseComplite } = props;

  const handleClick = (course: string, complite: number) => {
    onCurrentCourse(course);
    onCourseComplite(complite);
  };

  return (
    <div className="lesson-list">
      {tabs === "course" ? (
        <ul>
          {lessons.map((lesson) => (
            <li key={lesson.id} className="lesson">
              <div className="lesson__header" onClick={() => handleClick(lesson.title, lesson.complite)}>
                <h2>{lesson.title}</h2>
                <img className={currentCourse === lesson.title ? 'revers' : ''} src={openCloseIcon} alt="V" />
              </div>
              {currentCourse === lesson.title ? (
                <div className="lesson__main">
                  <p>{lesson.description}</p>
                  {!lesson.complite ? (
                    <div>
                      <Button>Запустить тур</Button>
                    </div>
                  ) : (
                    <div>
                      <Button>Начать сначала</Button>
                      <Button color="blue">Продолжить обучение</Button>
                    </div>
                  )}
                </div>
              ) : (
                ""
              )}
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
      {tabs === "term" ? (
        <div className="term">
          <h2>Термины</h2>
          <p>
            С другой стороны, высокое качество позиционных исследований способствует повышению качества новых
            предложений. Значимость этих проблем настолько очевидна, что сплочённость команды профессионалов создаёт
            необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса
            приоретизации разума над эмоциями. Кстати, активно развивающиеся страны третьего мира лишь добавляют
            фракционных разногласий и описаны максимально подробно! В своём стремлении повысить качество жизни, они
            забывают, что постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнить
            важные задания по разработке экспериментов, поражающих по своей масштабности и грандиозности.
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
