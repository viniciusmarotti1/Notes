import { Link } from "react-router-dom";

import { FaArrowCircleLeft, FaCamera } from "react-icons/fa";
import { CiMail, CiLock, CiUser } from "react-icons/ci";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Container, Form, Avatar } from "./styles";

export function Profile() {
    return (
        <Container>
            <header>
                <Link to="/"><FaArrowCircleLeft /></Link>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/viniciusmarotti1.png" alt="Foto do usuário" />
                    <label htmlFor="avatar">
                        <FaCamera />
                        <input id="avatar" type="file" />
                    </label>
                </Avatar>

                <Input
                    placeholder="Nome" type="text" icon={CiUser}
                />
                <Input
                    placeholder="E-mail" type="text" icon={CiMail}
                />
                <Input
                    placeholder="Senha atual" type="password" icon={CiLock}
                />
                <Input
                    placeholder="Senha nova" type="password" icon={CiLock}
                />
                <Button title="Salvar" />
            </Form>
        </Container>
    )
}