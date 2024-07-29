import RMDBLogo from '../../images/react-movie-logo.svg'
import TMDBLogo from '../../images/tmdb_logo.svg'

import { Link } from 'react-router-dom'

import { Content, LogoImg, TMDBLogoImg, Wrapper } from './Header.styles'
import React from 'react'


const Header: React.FC = () => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <LogoImg src={RMDBLogo} alt='rmdb-logo' />
            </Link>
            <LogoImg src={RMDBLogo} alt='rmdb-logo' />
            <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
        </Content>
    </Wrapper>
)

export default Header;