import { useAuth } from "../../hooks/auth"
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatarPlaceholder.svg"

import { GrPowerForceShutdown } from "react-icons/gr";
import { Container, Profile, Logout } from "./styles";

export function Header() {
    const { signOut, user } = useAuth()
    const navigation = useNavigate()

    function handleSignOut(){
        navigation("/")
        signOut()
    }

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    return (
        <Container>
            <Profile to="/profile">
                <img src={avatarUrl} />
                <div>
                    <span>Bem -vindo</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>
            <Logout onClick={handleSignOut}>
                <h4>SAIR</h4>
                <GrPowerForceShutdown />
            </Logout>
        </Container>
    )
}