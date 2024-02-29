import {Link} from "react-router-dom";
import styled from "styled-components";
import {FC} from "react";
import {Container} from "../global";


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


export const Header:FC = () => {

	return (

			<Head>
				<Container>
					<Headers>
						<Lists>
							<li><Link to="/">HH</Link></li>
							<li><Link to="/resume">Мое резюме</Link></li>
							<li><Link to='/profile'>Мой профиль</Link></li>
						</Lists>
					</Headers>
				</Container>

			</Head>


	)
}