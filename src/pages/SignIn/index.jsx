import { CiMail ,CiLock  } from "react-icons/ci";
import { Link } from "react-router-dom";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Container, Form, Background } from "./styles";

export function SignIn (){
    return(
        <Container>
            <Form>
                <h1>Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>
                <h2>Faça seu login</h2>

                <Input placeholder="E-mail"
                type="text"
                icon={CiMail}/>

                <Input placeholder="Senha"
                type="password"
                icon={CiLock}/>

                <Button title="Entrar"/>

                <Link to="/register">Crie uma conta</Link>
            </Form>
            <Background/>
        </Container>
    )
}