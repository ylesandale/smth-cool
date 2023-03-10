import {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";
import "./styles/index.scss";
import { AboutPageAsync } from "pages/AboutPage/ui/AboutPageAsync";
import { MainPageAsync } from "pages/MainPage/ui/MainPageAsync";
import {useTheme} from "./providers/ThemeProvider/lib/useTheme";
import {classNames} from "shared/lib/classNames/classNames";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

export enum Theme {
    LIGHT= 'light',
    DARK = 'dark'
}

const App = () => {
    const {theme,toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {},[theme])}>
            <button onClick={toggleTheme}>toggle</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage />} />
                    <Route path={'/'} element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
