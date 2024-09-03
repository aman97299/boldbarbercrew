import React from "react";
import "./footer.css";
function Footer() {
    return (
        <div className="container">
            <div className="footer-main">
                <div >
                    <p>
                        {/* <img
                            style={{ paddingTop: "10px" }}
                            src="../assets/images/logo-footer-1.png"
                            alt=""
                        /> */}
                    </p>
                    <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        officia. Lorem ipsum dolor sit amet.
                    </p>
                    <p>
                        consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </p>
                </div>

                <div >
                    <div>
                        <h4 class="footerInfoTitle">Useful Links</h4>
                        <div>
                            <ul style={{ paddingLeft: "5px" }}>
                                <li
                                    style={{
                                        borderBottom: "1px dashed black",
                                        padding: "10px",
                                    }}>
                                    Web Design
                                </li>
                                <li
                                    style={{
                                        borderBottom: " 1px dashed black",
                                        padding: "10px",
                                    }}>
                                    Mobile
                                </li>
                                <li
                                    style={{
                                        borderBottom: " 1px dashed black",
                                        padding: "10px",
                                    }}>
                                    Why BoldBarberCrew
                                </li>
                                <li
                                    style={{
                                        borderBottom: " 1px dashed black",
                                        padding: "10px",
                                    }}>
                                    Social Media
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <h4>Gallery</h4>
                    <div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                flexWrap: "wrap",
                                gap: "15px",
                            }}>
                            <div>
                                <img
                                    width="75"
                                    height="75"
                                    src="../assets/images/gpic-1.jpg"
                                    alt=""
                                />
                            </div>

                            <div>
                                <img
                                    width="75"
                                    height="75"
                                    src="../assets/images/gpic-2.jpg"
                                    alt=""
                                />
                            </div>

                            <div>
                                <img
                                    width="75"
                                    height="75"
                                    src="../assets/images/gpic-3.jpg"
                                    alt=""
                                />
                            </div>

                            <div>
                                <img
                                    width="75"
                                    height="75"
                                    src="../assets/images/gpic-4.jpg"
                                    alt=""
                                />
                            </div>

                            <div>
                                <img
                                    width="75"
                                    height="75"
                                    src="../assets/images/gpic-5.jpg"
                                    alt=""
                                />
                            </div>

                            <div>
                                <img
                                    width="75"
                                    height="75"
                                    src="../assets/images/gpic-6.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h4>Newsletter</h4>
                    <div>
                        <p>
                            Sign up for our mailing list to get the latest updates and
                            offers.
                        </p>
                        <div>
                            <div>
                                <p></p>
                                <ul></ul>
                            </div>
                            <form method="post" aria-label="Contact form">
                                <div style={{ display: "none" }}></div>
                                <p>
                                    <span>
                                        <input
                                            className="input-dimentions"
                                            type="email"
                                            value=""
                                        />
                                    </span>
                                    <input
                                        className="button-dimensions"
                                        type="submit"
                                        value="subscribe"
                                    />
                                    <span></span>
                                </p>
                                <div aria-hidden="true"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;
