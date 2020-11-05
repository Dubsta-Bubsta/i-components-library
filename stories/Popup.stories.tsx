import React, { useState } from 'react';
import { Popup, AuthPopup } from '../src'
import AuthForm from '../src/Popup/AuthForm/AuthForm'
import { storiesOf } from '@storybook/react'

export default {
    title: 'Popup',
   
};

export const DefaultPopup = (props) => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <button onClick={() => { setOpen(true) }}>OPEN</button>
            <Popup open={open} setOpen={setOpen}>
                <div style={{ padding: 20 }}> Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация </div>
            </Popup>
        </>
    );
};

export const AuthPopupExample = (props) => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <button onClick={() => { setOpen(true) }}>OPEN</button>
            <AuthForm open={open} setOpen={setOpen}/>
        </>
    );
};


storiesOf('Popup', module)
    .add('default', AuthPopupExample)
   