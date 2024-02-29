import {FC} from "react";
import {
    Events, EventsTitle,
    MainBlock,
    MainInfo,
    MyEvents, MyEventsTitle,
    Recommendation, RecommendationSubTitle, RecommendationTitle,
    SearchForm,
    SearchFormButton,
    SearchFormInput,
    Work,
    WorkLists,
} from "./mainStyle";
import {Container} from "../global";

export const Main: FC = () => {


    return (
        <MainBlock>
            <Container>
                <div>
                    <SearchForm>
                        <SearchFormInput type='test' placeholder='Введите профессию или должность'/>
                        <SearchFormButton>Найти</SearchFormButton>
                    </SearchForm>
                    <MainInfo>
                        <MyEvents>
                            <MyEventsTitle>Мои события</MyEventsTitle>
                            <Events>
                                <EventsTitle>Отклики и приглашения</EventsTitle>
                                <EventsTitle>**5**</EventsTitle>
                            </Events>

                            <Events>
                                <EventsTitle>Избранные вакансии</EventsTitle>
                                <EventsTitle>**13**</EventsTitle>
                            </Events>
                        </MyEvents>
                        <Recommendation>
                            <RecommendationTitle>Рекомендуем лично вам</RecommendationTitle>
                            <RecommendationSubTitle>Подобрали вакансии для вашего резюме</RecommendationSubTitle>
                            <WorkLists>
                                <Work>
                                    <h3>Вакансия</h3>
                                    <p>ЗП</p>
                                    <p>Город</p>
                                    <button>Откликнуться</button>
                                </Work>
                                <Work>
                                    <h3>Вакансия</h3>
                                    <p>ЗП</p>
                                    <p>Город</p>
                                    <button>Откликнуться</button>
                                </Work>
                                <Work>
                                    <h3>Вакансия</h3>
                                    <p>ЗП</p>
                                    <p>Город</p>
                                    <button>Откликнуться</button>
                                </Work>
                            </WorkLists>
                        </Recommendation>

                    </MainInfo>
                </div>
            </Container>
        </MainBlock>
    )
}

// Делать верстку сайта без логики по максимуму кнопочки, формы, если получится сделать типизацию,
// Библиотека i18 next https://www.i18next.com/
// Дока по TS
// Дженерик читать https://habr.com/ru/companies/tinkoff/articles/588655/
// Статья по дженерикам 2 - https://www.dev-notes.ru/articles/typescript/generics-in-typescript/