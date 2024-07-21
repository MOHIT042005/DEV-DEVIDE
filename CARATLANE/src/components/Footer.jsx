import React from "react";
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
    Para,
    Link,
} from "./FooterStyles";

const Footer = () => {
    return (
        <Box>
            {/* <h1
                style={{
                    color: "green",
                    textAlign: "center",
                    marginTop: "10px",
                }}
            >
               
            </h1> */}
            <FooterContainer>
                <Row>
                    <Column>
                    <Heading>Know Your jewellery</Heading>
                        <FooterLink href="#">
                            Diamond guide
                        </FooterLink>
                        <FooterLink href="#">

                            Jewellery guide
                        </FooterLink>
                        <FooterLink href="#">

                            Gemstones guide
                        </FooterLink>
                        <FooterLink href="#">
                            Gold rate
                        </FooterLink>
                        <FooterLink href="#">
                            Egold
                        </FooterLink>
                        <FooterLink href="#">
                            Ear piercing
                        </FooterLink>
                    </Column>
                    <Column>
<Heading>CaratLane Advantage</Heading>
                        <FooterLink href="#">

                            15-day returns

                        </FooterLink>
                        <FooterLink href="#">

                            Free shipping
                        </FooterLink>
                        <FooterLink href="#">

                            Financing options

                        </FooterLink>
                        <FooterLink href="#">
                            Postcards
                        </FooterLink>
                        <FooterLink href="#">
                            Old gold exchange
                        </FooterLink>
                    </Column>
                    <Column>
                    <Heading>Customer Service</Heading>
                        <FooterLink href="#">
                            Return policy
                        </FooterLink>
                        <FooterLink href="#">
                            Order status
                        </FooterLink>

                    </Column>
                    <Column>
                    <Heading>
                    About Us
                    </Heading>
                        <FooterLink href="#">
                            Our story
                        </FooterLink>
                        <FooterLink href="#">
                            Press
                        </FooterLink>
                        <FooterLink href="#">
                            Blog
                        </FooterLink>
                        <FooterLink href="#">
                            Careers
                        </FooterLink>
                    </Column>
                    <Column>
                    <Heading>
                    Contact Us
                    </Heading>
                        <Para><p style={{fontWeight: "bold", opacity: 0.6}}>CaratLane Trading Pvt Ltd</p>
                         No:727, 1st Floor, TIL Park Anna Salai, Pathari Road, Thousand Lights, Chennai, Tamil Nadu 600006.
                         
                         </Para>
                         <Para><p style={{fontWeight: "bold", opacity: 0.6, fontSize: 11}}>24X7 ENQUIRY SUPPORT ( ALL DAYS )</p>
<Para>General : <Link>contactus@caratlane.com</Link></Para>
<Para>Corporate : <Link>b2b@caratlane.com</Link></Para>
<Para>Hr : <Link>careers@caratlane.com</Link></Para>
<Para>Grievance : <Link>click here</Link></Para></Para>
                    </Column>
                    {/* <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Youtube
                                </span>
                            </i>
                        </FooterLink>
                    </Column> */}
                </Row>
            </FooterContainer>
        </Box>
    );
};
export default Footer;