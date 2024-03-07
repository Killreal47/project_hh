import {
    BtnResume,
    BtnWrapper,
    MyResume,
    MyResumeBlock,
    MyResumeBtn,
    MyResumes,
    MyResumeTitle,
    ResumeContainer
} from "./resumeStyle";
import {Container} from "../global";
import {Navigate, useNavigate} from "react-router-dom";

export const Resume = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Container>
                <ResumeContainer>
                    <MyResumes>
                        <h1>Мои резюме</h1>
                        <BtnWrapper>
                            <BtnResume>Заказать резюме</BtnResume>
                            <BtnResume>Создать резюме</BtnResume>
                        </BtnWrapper>
                    </MyResumes>
                    <div>
                        <h2>Откликнитесь еще **1** раз</h2>
                        <div>Откликнулись **9** раз из 10</div>
                    </div>
                    <MyResume onClick={() => navigate('/resume/my-resume')}>
                        <MyResumeTitle>Резюме: **Frontend-разработчик**</MyResumeTitle>
                    </MyResume>
                </ResumeContainer>

            </Container>
        </div>
    )
}

