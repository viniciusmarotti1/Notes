import { Link } from "react-router-dom";

import { GrPowerForceShutdown } from "react-icons/gr";
import { Container, Profile, Logout } from "./styles";

export function Header(){
    return(
    <Container>
        <Profile to="/profile">
            <img src="https://github.com/viniciusmarotti1.png"/>
            <div>
                <span>Bem -vindo</span>
                <strong>Vinicius Marotti</strong>
            </div>
        </Profile>
        <Logout>
            <h4>SAIR</h4>
            <GrPowerForceShutdown/>
        </Logout>
    </Container>
    )
}