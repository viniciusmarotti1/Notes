import { Link } from "react-router-dom";

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'

import { Container, Form } from './styles'

export function NewNote() {
    return (
        <Container>
            <Header />
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>
                    <Input placeholder="Título" type="text" />
                    <Textarea placeholder="Observações" />
                    <Section title="Links úteis">
                        <NoteItem value="https://youtube.com/Viniciusmarotti" />
                        <NoteItem placeholder="Novo link" isNew />
                    </Section>
                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="react" />
                            <NoteItem placeholder="Nova tag" isNew />
                        </div>
                    </Section>
                    <Button title="Salvar"/>      
                </Form>
            </main>

        </Container>
    )
}