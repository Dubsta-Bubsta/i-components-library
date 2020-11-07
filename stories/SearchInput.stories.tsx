import React, { useState } from 'react';
import { Box, HorizontalSelectors, HorizontalSelectorType, colors, SearchInput } from '../src'

export default {
    title: 'SearchInput',

    argTypes: {
        theme: {
            control: {
                type: 'select',
                options: [
                    "gray", "white"
                ],
            },
            description: "Search input theme (gray | white)",
            defaultValue: { summary: 'gray' },
        },
        borderRadius: {
            control: {
                type: 'select',
                options: [
                    "default", "small"
                ],
            },
            description: "",
            defaultValue: { summary: 'default' },
        },
        placeholder: {
            defaultValue: { 
                summary: "",
            },
            description: "Input placeholder"
        },
        searchText: {
            description: "Required field to control search input text"
        },
        setSearchText: {
            description: "Required field to control search input text"
        },
    },
    args: {
        borderRadius: 'default',
        theme: 'gray',
        placeholder: 'Поиск по сайту',
    },
};
export const SearchInputExample = (props) => {
    const [searchText, setSearchText] = useState('')
    return (
        <SearchInput 
            {...props}
            searchText={searchText} 
            setSearchText={setSearchText}
        />
    );
};

