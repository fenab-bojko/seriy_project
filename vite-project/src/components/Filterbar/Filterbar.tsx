import React, { FC } from "react";
import "./Filterbar.scss";

interface IFilterbar {
  onFilterInput: (filter: string) => void;
  onFilterSelect: (filret: string) => void;
  onFilterTabs: (filter: string) => void;
  filterInput: string;
  tabs: string;
}

export const Filterbar: FC<IFilterbar> = (props) => {
  const { filterInput, onFilterInput, onFilterSelect, onFilterTabs, tabs } = props;

  return (
    <div className="filterbar">
      <div className="tabs">
        <div className={tabs === "course" ? "active" : ""} onClick={() => onFilterTabs("course")}>
          Курсы
        </div>
        <div className={tabs === "term" ? "active" : ""} onClick={() => onFilterTabs("term")}>
          Термины
        </div>
      </div>
      <select name="" id="" onChange={(e) => onFilterSelect(e.target.value)}>
        <option value="all">Все</option>
        <option value="complited">Выполненые</option>
        <option value="new">Новые</option>
      </select>
      <input type="text" placeholder="Поиск..." value={filterInput} onChange={(e) => onFilterInput(e.target.value)} />
    </div>
  );
};
