/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const nav = useNavigate()
    return (
        <nav className='navbar-top'>
            <div className='container'>
                <ul className='navbar-links-main'>
                    <l1>
                        <a onClick={() => nav("/")}>
                            HOME
                        </a>
                    </l1>

                    <l1>
                        <a onClick={() => nav("/servicesbookingform")}>
                            SERVICES
                        </a>
                    </l1>
                    <l1>
                        <a onClick={() => nav("/products")}>
                            PRODUCT
                        </a>
                    </l1>
                    <l1>
                        <a onClick={() => nav("/AddToCart")}>
                            Cart
                        </a>
                    </l1>
                    {/* <l1>
                        <a>
                            ABOUT US
                        </a>
                    </l1> */}
                </ul>
            </div>
        </nav>

    )
}

export default NavBar