import React, { FC, useCallback, useState } from "react";
import "./UserInfo.scss";
import { Button } from "../Button/Button";
import { IUser } from "../../lib/data";
import avatar from "../../assets/avatar.jpg";
import openCloseIcon from '../../assets/icon/openCloseIcon.svg';

interface IUserInfo {
  currentCourse: string;
  courseComplite: number;
  allComplite: number;
  data: IUser;
}

export const UserInfo: FC<IUserInfo> = (props) => {
  const { currentCourse, courseComplite, allComplite, data } = props;

  const [visibleUserInfo, setVisibleUserInfo] = useState(true)

  const toogleVisibleUserInfo = useCallback(() => {
    setVisibleUserInfo(prev => !prev);
  }, [])

  return (
    <div className="user-info">
      <div className="user__header" onClick={toogleVisibleUserInfo}>
        <h3>Основное</h3>
        {!visibleUserInfo ? <p>
            <strong>Текущий курс: </strong>{currentCourse}</p> : ''}
        <img className={visibleUserInfo ? 'revers' : ''} src={openCloseIcon} alt="V" />
      </div>
      {visibleUserInfo ? 
        <div className="user__main">
        <div className="avatar_container">
          <div className="avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <span>{data.firstName} {data.lastName}</span>
        </div>
        <div className="current-course">
          <p>
            <strong>Текущий курс: </strong>
            {currentCourse}
          </p>
          {!courseComplite ? (
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
      </div> : ''}
      
    </div>
  );
};
