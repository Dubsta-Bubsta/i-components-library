import React, { useState } from 'react';
import { Popup, AuthPopup, Button } from '../src'
import AuthForm from '../src/Popup/AuthForm/AuthForm'
import { storiesOf } from '@storybook/react'

export default {
    title: 'Popup',
    argTypes: {
        children: {
            required: true,
            defaultValue: { summary: '' },
            description: "Popup content"
        },
        open: {
            required: true,
            defaultValue: { summary: false },
            description: "Popup visibility"
        },
        setOpen: {
            required: true,
            description: "Set popup visibility function"
        },
    },
    args: {
        children: '',
        open: false,
        setOpen: "() => void"
    },
};

export const DefaultPopupExample = (props) => {
    const [open, setOpen] = useState(props.open)
    return (
        <>
            <Button onClick={() => { setOpen(true) }} theme="blue">OPEN</Button>
            <Popup open={open} setOpen={setOpen}>
                <div style={{ padding: 20, background: '#fff' }}> Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация </div>
            </Popup>
        </>
    );
};

export const AuthPopupExample = (props) => {
    const [open, setOpen] = useState(props.open)
    return (
        <>
            <Button onClick={() => { setOpen(true) }} theme="blue">OPEN</Button>
            <AuthForm open={open} setOpen={setOpen}/>
        </>
    );
};