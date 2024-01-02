import { CiMail ,CiLock, CiUser  } from "react-icons/ci";
import { Link } from "react-router-dom";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Container, Form, Background } from "./styles";

export function SignUp (){
    return(
        <Container>
            <Background/>
            <Form>
                <h1>Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>
                <h2>Crie sua conta</h2>

                <Input placeholder="Nome"
                type="text"
                icon={CiUser}/>

                <Input placeholder="E-mail"
                type="text"
                icon={CiMail}/>

                <Input placeholder="Senha"
                type="password"
                icon={CiLock}/>

                <Button title="Cadastrar"/>

                <Link to="/">Voltar para o login</Link>
            </Form>
        </Container>
    )
}