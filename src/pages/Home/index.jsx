import { FaPlusCircle, FaSearch } from "react-icons/fa";

import { Container, Brand, Menu, Search, Content, Newnote } from "./styles"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Section } from "../../components/Section"
import { Note } from "../../components/Note"


export function Home() {
    return (
        <Container>
            <Brand>
                <h1>Notes</h1>
            </Brand>

            <Header>

            </Header>

            <Menu>
                <li><ButtonText title="Todos" isactive /></li>
                <li><ButtonText title="NodeJs" /></li>
                <li><ButtonText title="React" /></li>
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo titulo" icon={FaSearch} />
            </Search>

            <Content>
                <Section title="Minhas notas">
                    <Note data={{
                        title: 'React',
                        tags: [
                            { id: '1', name: 'react' },
                            { id: '2', name: 'node'}
                        ]
                    }}
                    />
                </Section>
            </Content>

            <Newnote to="/newnote">
                <FaPlusCircle />
                New note
            </Newnote>


        </Container>
    )
}