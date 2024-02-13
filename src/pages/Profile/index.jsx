import { useState } from "react";
import { useAuth } from "../../hooks/auth";

import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatarPlaceholder.svg"

import { FaArrowCircleLeft, FaCamera } from "react-icons/fa";
import { CiMail, CiLock, CiUser } from "react-icons/ci";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"


import { Container, Form, Avatar } from "./styles";

export function Profile() {
    const { user, updateProfile } = useAuth()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState()
    const [passwordNew, setPasswordNew] = useState()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)

    const navigate = useNavigate()

    function handleBack() {
        navigate(-1)
    }

    async function handleUpdate() {
        const updated = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld
        }

        const userUpdated = Object.assign(user, updated)

        await updateProfile({ user: userUpdated, avatarFile })
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }

    return (
        <Container>
            <header>
                <button type="button" onClick={handleBack}>
                    <FaArrowCircleLeft />
                </button>
            </header>

            <Form>
                <Avatar>
                    <img src={avatar} alt="Foto do usuário" />
                    <label htmlFor="avatar">
                        <FaCamera />
                        <input id="avatar" type="file" onChange={handleChangeAvatar} />
                    </label>
                </Avatar>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={CiUser}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={CiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={CiLock}
                    onChange={e => setPasswordOld(e.target.value)}
                />
                <Input
                    placeholder="Senha nova"
                    type="password"
                    icon={CiLock}
                    onChange={e => setPasswordNew(e.target.value)}
                />
                <Button title="Salvar" onClick={handleUpdate} />
            </Form>
        </Container>
    )
}