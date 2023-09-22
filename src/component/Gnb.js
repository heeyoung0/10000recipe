import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Gnb = () => {

    const Navigate = useNavigate();
    const search = (e) => {
        if (e.key==='Enter') {
            let keyword = e.target.value;
            Navigate(`/?q=${keyword}`)
        }
    }
  return (
    <>
        <div className="logo">
            <Link to='/'><img src={require('../img/logo.png')} alt="로고" /></Link>
        </div>
        <div class="menu-area">
            <Navbar bg="light" data-bs-theme="light" text-white>
                <Container>
                    <Nav className="me-auto menu">
                        <Nav.Link href="/">메인</Nav.Link>
                        <Nav.Link href="#">추천</Nav.Link>
                        <Nav.Link href="#">랭킹</Nav.Link>
                        <Nav.Link href="#">매거진</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className="search">
                <img src={require('../img/search-ico.png')} alt="상품검색" />
                <input type="text" placeholder='상품검색' onKeyDown={(e)=>search(e)}/>
            </div>
        </div>
    </>
  )
}

export default Gnb