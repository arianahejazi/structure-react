import React from 'react'
import styled from 'styled-components'
import {Container,Row,Col ,Form,Group ,InputGroup,Button,FormControl} from 'react-bootstrap'
import { FiInfo ,FiUser ,FiLock} from 'react-icons/fi'

// import {LogBox} 'sd'sd'sd

// <LogBox status="this.state.stus\\" color={color}/>

// export const LogBox = styled.div`
//     padding:20px;
//     display:${props=>props.status?'block':'none'};
// `

const Unboard = styled.div`
    
    padding:20px;

    H3{
        padding:20px;
        color:#f0b248;
    }
    .UnboardImg{
        margin: 50px 0;
    }
    .UnboardTxt{
        margin: 50px 0;
        text-align: justify;
    }
`;

const Features = styled.div`
    background: #efefef;
    padding: 20px;
    margin: 50px 0;
`;
const Desc = styled.div`
    .FeaturesBox .col{
        background: #f1f1f1;
        margin: 10px;
        box-shadow: 0px 1px 4px 1px #c0c0c0dd;
    }
`;
const FormLogin = styled.div`
h2{
    margin: 100px 0 20px;
}
h3{
    margin: 20px 0;
}
h4{
    margin: 20px 0;
}
    .boxLogin{
        width: 60%;
        margin: 50px;
        background: #f6f6f6;
        padding: 50px;
        box-shadow: 0px 0px 5px 1px #dedede;
        padding: 50px 50px 0;
    }
    .input-group-text{
        border-left: none!important;
        border-radius: 0 3px 3px 0!important;
        display: block;
        background-color: #ffffff;
        border: 1px solid #dddd;

    }
    .form-control{       
        border: 1px solid #dddd;
        border-radius: 3px 0 0 3px !important;
        border-right: none !important;
    }
    button{
        background: #f0b248;
        color: #403e3c;
        width:100%;
        margin: 20px 0;
        border:none;
        &:hover{
            opacity:0.5;
            background: #f0b248;
            color: #403e3c;

        }
    }
    .registerLink{
        color:#94cdd3;
        padding: 15px;
        display: block;
        &:hover{
            color:#94cdd3;
            opacity:0.5;
        }
    }

    .hint{
        display: inline-block;
        width: 50%;
        text-align: left;
    }
    .forgottPass{
        display: inline-block;
        width: 50%;
        text-align: right;
    }

    .input-group{
        flex-direction: row-reverse;
        margin: 20px 0;
    }
    .form-control{
        text-align: right;
    }
`;




export default function MainLandingPage() {
    return (
        <div>
            <FormLogin>


                <Row>
                    
                    <Col xs={12} md={6} lg={6}>
                        <h2>
                            شعشعاررررشعاررررشعاررررارررر
                        </h2>
                        <h3>
                            شعاشعاررررشعاررررشعارررررررر
                        </h3>
                        <h5>
                        شعاررررشعاررررشعاررررشعاررررشعاررررشعارررر
                        </h5>
                    </Col>

                    <Col  xs={12} md={6} lg={6}> 
                        <div className="boxLogin"> 
                        <Form>
                            <Form.Label htmlFor="inlineFormInputGroupUsername" srOnly>
                                نام کاربری
                            </Form.Label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                <InputGroup.Text>
                                 <FiUser></FiUser>
                                </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl id="inlineFormInputGroupUsername" placeholder=" نام کاربری" />
                            </InputGroup>


                            <Form.Label htmlFor="inlineFormInputGroupUsername" srOnly>
                            رمز عبور
                            </Form.Label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <FiLock></FiLock>
                             
                                </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl id="inlineFormInputGroupUsername" placeholder=" رمز عبور" />
                            </InputGroup>


                            <Button variant="primary" type="submit">
                                ورود
                            </Button>
                        </Form>

                            <Col  xs={12} md={12} lg={12}>
                                <a className="hint">
                                   <FiInfo></FiInfo>
                                </a>
                                <a className="forgottPass">
                                    فراموشی رمز عبور
                                </a>
                            </Col>

                            <Col  xs={12} md={12} lg={12}>
                                <a className="registerLink">
                                    ثبت نام نکرده ام ؟
                                </a>
                            </Col>
                        </div>
                    </Col>
            </Row>
            </FormLogin>
        </div>
    )
}