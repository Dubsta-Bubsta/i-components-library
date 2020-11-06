import React, { useState } from 'react';
import { Box, HorizontalSelectors, HorizontalSelectorType, colors } from '../src'
import { SelectorType } from '../src/Select/Select';

export default {
    title: 'HorizontalSelectors',
};

export const SelectorsExample = () => {
    const selectors = [
        { id: 1, label: 'Ожидаемые', borderColor: colors.yellow },
        { id: 2, label: 'Одобренные', borderColor: colors.green },
        { id: 3, label: 'Отклоненные', borderColor: colors.red },
    ] as Array<HorizontalSelectorType>
    const [activeSelector, setActiveSelector] = useState(selectors[0])

    return (
        <HorizontalSelectors selectors={selectors} activeSelector={activeSelector} setActiveSelector={setActiveSelector}/>
    );
};