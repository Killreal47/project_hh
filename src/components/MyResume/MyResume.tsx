import React from 'react';
import {Container} from "../global";
import {FormDescription, FormInput, MainBlock, MyResumeBlock} from "./MyResumeStyle";


export const MyResume = () => {
    return (
        <MyResumeBlock>
            <Container>
                <form>
                    <MainBlock className="name">
                        <div>Имя</div>
                        <FormInput name={"name"} disabled={true} placeholder={'**Кирилл Русинов**'}/>
                    </MainBlock>
                    <MainBlock className="work">
                        <div>Название вакансии</div>
                        <FormInput name={"work"} className="work" placeholder='**Frontend-developer**'/>
                    </MainBlock>
                    <MainBlock className="description">
                        <div>Описание</div>
                        <FormDescription name={"description"} className="description" placeholder='**JKFDNVBKJKJFSDNBVJKDNFKJnvjbdfjhbnjhnfjdghbnh**'/>
                    </MainBlock>
                </form>
            </Container>
        </MyResumeBlock>
    );
};

