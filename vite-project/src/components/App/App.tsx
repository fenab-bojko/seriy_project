import React, {FC} from "react";
import './App.scss';
import { Menu } from "../Menu/Menu";
import { Main } from "../Main/Main";

export const App: FC = () => {
    return <div className="app">
        <Menu />
        <Main />
    </div>
}