import React from 'react';
import Profile from '../images/뉴욕1.jpg'
const About = () => {
    return (
        <div className="row">
            <div className="col-lg-8">
                <h1>About Me</h1>
                <p>
                    안녕하세요 원종필입니다. 저는 토목공학을 전공하였고 대학교 졸업당시 수자원에 관심이 많아
                    수자원설계 엔지니어로 일을 하게 되었습니다.
                    <br />
                    하지만 저의 적성을 찾아 현재는 컴퓨터 언어를 공부하고 있으며 특히 웹개발 분야에 관심이 많습니다.
                    저의 목표는 언젠가는 나만의 멋진 홈페이지를 제작해보자는 것이였습니다. 자바와 자바스크립트를 배우면서 수행한 여러 프로젝트들을 통해
                    이 목표에 다가가고 있습니다. 아직까지는 기술 구현이나 멋진 스타일링을 구사하기에는 많은 무리가 있지만
                    차근차근 배우면서 하드코더에서 스마트 코더로 탈바꿈 할 날만을 기다리고 있습니다.
                    성장하는 제 모습을 지켜봐 주세요
               </p>
                <h1>Present</h1>
                <p>
                    현재 저는 자바스크립트를 공부하고 있습니다. 기존에 스프링부트를 통해 JSP와 Servlet을 이용하여
                    홈페이지를 작성하는 방법을 배웠었는데 이는 팀을 이루어 과제를 수행할 때 매우 편했다고 생각했습니다.
                    하지만 자바스크립트에도 많은 프레임워크가 있다는 걸 배우게 되었고 현재는 리액트와 NodeJS 그리고 주 언어로 파이썬등을 배우고 있습니다.
                </p>
                <h1>Interest</h1>
                <p>
                    저는 농구와 게임, 만화, 영화를 사랑하며 언젠간 이 모든 관심사들을 한 데 어우를 수 있는 기능을 가진 홈페이지를 제작 할 것입니다.
                    또한 언젠간 고양이에게 간택당하는 날만을 기다리고 있습니다.
                </p>
            </div>
            <div className="col-lg-4">
                <img src={Profile} alt="profile" width="100%" />
                <h1>Contact</h1>
                <p>가장 빠른 방법으로 저에게 연락하는 방법은 이메일입니다.<br />
                    <a href="mailto:rocknzero1@gmail.com">rocknzero1@gmail.com</a>
                </p>
                <h1>Social Links</h1>
                <p>
                    <a href="https://blog.naver.com/alclsshas511">네이버 블로그</a><br/>
                    <a href="https://github.com/JPWon-1">깃헙:JPWon-1</a>
                </p>
            </div>
        </div>
    );
};

export default About;