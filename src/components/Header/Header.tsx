import {Link} from "react-router-dom";
import styled from "styled-components";
import {FC} from "react";
import {Container} from "../global";
import {useTranslation,Trans } from "react-i18next";


const Head = styled.div`
    background-color: #e61236;
    height: 70px;
`;

const Headers = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding-top: 25px;
`

const Lists = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const lngs = {
    en: { nativeName: "English"},
    ru: {nativeName: "Russian"},
}

export const Header: FC = () => {

    // const {t, i18n} = useTranslation();

    return (

        <Head>
            <Container>
                <Headers>
                    <Lists>
                        <li><Link to="/">HH</Link></li>
                        {/*<Trans i18nKey ="header.resume" > {t("header.resume")} </Trans>*/}
                        <li><Link to="/resume">Резюме</Link></li>
                        {/*{t("header.myProfile")}*/}
                        <li><Link to='/profile'>Профиль</Link></li>
                        {/*<li>*/}
                        {/*    {Object.keys(lngs).map(locale => {*/}
                        {/*        // @ts-ignore*/}
                        {/*        return <button onClick={() => i18n.changeLanguage(locale)}> {lngs[locale].nativeName} </button>*/}

                        {/*    })}*/}
                        {/*</li>*/}
                    </Lists>
                </Headers>

            </Container>

        </Head>


    )
}