import React, { FC } from "react";
import "./UserInfo.scss";
import { Button } from "../Button/Button";

interface IUserInfo {
  currentCourse: string;
  courseComplite: number;
  allComplite: number;
}

export const UserInfo: FC<IUserInfo> = (props) => {
  const { currentCourse, courseComplite, allComplite } = props;

  return (
    <div className="user-info">
      <div className="user__header">
        <h3>Основное</h3>
        <img src="" alt="V" />
      </div>
      <div className="user__main">
        <div className="avatar"></div>
        <div className="current-course">
          <p>
            <strong>Текущий курс: </strong>
            {currentCourse}
          </p>
          {!courseComplite ? 
          <div>
            <Button>Запустить тур</Button>
          </div> : 
          <div>
            <Button>Начать сначала</Button>
            <Button color='blue'>Продолжить обучение</Button>
          </div>}
        </div>
        <div className="user__complite">
            <div className="user__complite_course">
                <div className="skale">
                    <span>{courseComplite}%</span>
                </div>
                <p>Курс пройден на {courseComplite}%</p>
            </div>
            <div className="user__complite_all">
            <div className="skale">
                    <span>{allComplite}%</span>
                </div>
                <p>Курс пройден на {allComplite}%</p>
            </div>
        </div>
      </div>
    </div>
  );
};
