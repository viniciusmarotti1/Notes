import { useState } from "react";
import { CiMail, CiLock } from "react-icons/ci";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Container, Form, Background } from "./styles";

export function SignIn() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const { signIn } = useAuth()

    function handleSignIn() {
        signIn({ email, password })
    }

    return (
        <Container>
            <Form>
                <h1>Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>
                <h2>Faça seu login</h2>

                <Input placeholder="E-mail"
                    type="text"
                    icon={CiMail}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input placeholder="Senha"
                    type="password"
                    icon={CiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title="Entrar" onClick={handleSignIn} />

                <Link to="/register">Crie uma conta</Link>
            </Form>
            <Background />
        </Container>
    )
}