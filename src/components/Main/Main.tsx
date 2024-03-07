import { FC, useEffect, useState } from "react";
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
import { Container } from "../global";
import { dataBase } from "../../data";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../store/reducer";

export const Main: FC = () => {

	const dispatch = useDispatch()
	const data = useSelector((state: any) => state.data)

	useEffect(() => {
		setTimeout(() => {
			dispatch(getData(dataBase.results))
		}, 1000)
	}, []);

	const renderVacansion = () => {
		data.map((value: { work: string, wages: number, description: string }) => {

			return (
				<Work>
					<h3>{value.work}</h3>
					<p>{value.wages}</p>
					<p>{value.description}</p>
					<button>Откликнуться</button>
				</Work>
			)
		})
	}

	renderVacansion()

	return (
		<MainBlock>
			<Container>
				<div>
					<SearchForm>
						<SearchFormInput type='test' placeholder='Введите профессию или должность' />
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
							<RecommendationTitle>Вакансии</RecommendationTitle>
							<RecommendationSubTitle>Подобрали вакансии для вашего резюме</RecommendationSubTitle>
							<WorkLists>

								{renderVacansion()}

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