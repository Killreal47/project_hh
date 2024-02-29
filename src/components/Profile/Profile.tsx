import {Container} from '../global'
import {MailingBlock, Block, DeleteAcc, NewsLetters, Heading, HeadingList, InfoBlock, CheckBox} from "./profileStyle";

export const Profile = () => {

    return (
        <div>
            <Container>
                <Heading>Настройки</Heading>
                <HeadingList>
                    <li>Личные данные</li>
                    <li>Рассылки</li>
                </HeadingList>
                <InfoBlock>
                    <Block>
                        <div>Имя</div>
                        <div>Вася Вася</div>
                        <a href='#'>Изменить</a>
                    </Block>
                    <Block>
                        <div>Пароль</div>
                        <div>******</div>
                        <a href='#'>Изменить</a>
                    </Block>
                    <Block>
                        <div>Email</div>
                        <div>vasy@mail.ru</div>
                        <a href='#'>Изменить</a>
                    </Block>
                    <Block>
                        <div>Мобильный телефон</div>
                        <div>8(800)555-35-35</div>
                        <a href='#'>Изменить</a>
                    </Block>
                </InfoBlock>
                <DeleteAcc href="#">Удалить аккаунт</DeleteAcc>

                <NewsLetters>
                    <MailingBlock>
                        <div>Смс-уведомления</div>
                        <div>
                            <CheckBox>
                                <input type="checkbox" id='notification'/>
                                <label htmlFor="notification">Оповещения и советы</label>
                            </CheckBox>
                            <CheckBox>
                                <input type="checkbox" id='news'/>
                                <label htmlFor="news">Новости сайта и реклама</label>
                            </CheckBox>
                            <CheckBox>
                                <input type="checkbox" id='vacancies'/>
                                <label htmlFor="vacancies">Новые вакансии</label>
                            </CheckBox>
                        </div>
                    </MailingBlock>
                    <MailingBlock>
                        <div>Почтовые рассылки</div>
                        <div>
                            <CheckBox>
                                <input type="checkbox" id='notification'/>
                                <label htmlFor="notification">Оповещения и советы</label>
                            </CheckBox>
                            <CheckBox>
                                <input type="checkbox" id='news'/>
                                <label htmlFor="news">Новости сайта и реклама</label>
                            </CheckBox>
                            <CheckBox>
                                <input type="checkbox" id='vacancies'/>
                                <label htmlFor="vacancies">Новые вакансии</label>
                            </CheckBox>
                        </div>
                    </MailingBlock>
                    <MailingBlock>
                        <div>PUSH-уведомления</div>
                        <div>
                            <CheckBox>
                                <input type="checkbox" id='notification'/>
                                <label htmlFor="notification">Оповещения и советы</label>
                            </CheckBox>
                            <CheckBox>
                                <input type="checkbox" id='news'/>
                                <label htmlFor="news">Новости сайта и реклама</label>
                            </CheckBox>
                            <CheckBox>
                                <input type="checkbox" id='vacancies'/>
                                <label htmlFor="vacancies">Новые вакансии</label>
                            </CheckBox>
                        </div>
                    </MailingBlock>
                </NewsLetters>
            </Container>

        </div>
    )
}