import React from 'react'
import styled from 'styled-components'
import { Title } from '../theme';

const Header = (props) => {
    return (
        <header className={props.className}>
            <img src="/icons/logo.svg" alt="logo" height="45"></img>
            <Title>TikTok</Title>
        </header>
    )
}

export default styled(Header)`
    text-align: center;
    padding: 1em 0;
    img {
        vertical-align: middle;
    }
`;
