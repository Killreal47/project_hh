import React from 'react';

import {
    Route,
    Routes
} from "react-router-dom";
import {Main} from "./components/Main/Main";
import GlobalStyle, {MainBlock, Wrapper} from "./components/global"
import {Resume} from "./components/Resume/Resume";
import {Profile} from "./components/Profile/Profile";
import {Footer} from "./components/footer/Footer";
import {Header} from "./components/Header/Header";
import {MyResume} from "./components/MyResume/MyResume";


function App() {
    return (
        <Wrapper>
            <MainBlock>
                <GlobalStyle/>
                <Header/>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="resume" element={<Resume/>}/>
                    <Route path="resume/my-resume" element={<MyResume/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                </Routes>
            </MainBlock>
            <Footer/>
        </Wrapper>
    );
}

export default App;
