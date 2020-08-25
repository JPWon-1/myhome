import React from 'react';

const Bitcamp = () => {
    return (
        <div className="row">
            <div id="project-container" className="col-lg-9">
                <p>
                    <b>비트캠프</b>사이트는 캠핑용품의 대여 사이트이다.<br />
                    <ol>
                        <li>관리자</li>
                        <li>회원</li>
                        <li>비회원</li>
                    </ol>
                    이 이용할 수 있게 만들었으며 제품의 판매가 아닌 대여를 해주는 사이트이기 때문에 제품의 재고를 관리 할 수 있었어야 했다.
                    <br />
                    따라서 이를 이용하기 위한 DB테이블들을 만들었고, 이를 기반으로 고객에게 제품의 대여날짜별 상품 재고를 제공하는 등의 기능을 제공 할 수 있었다.
                    <br />
                </p>
                <p>
                    비트캠프 사이트는 Spring Boot를 이용하여 개발을 한 사이트로 MyBatis를 연동하여 OracleDB에 접근하여 데이터를 다루었다.<br />
                    이 프로젝트를 통해 MVC 패턴을 연습할 수 있었고, Ajax를 이용하여 비동기식 데이터 전송방법에 대해 공부 하였다.
                    <br />
                </p>
                <p>   
                    이 프로젝트에서 나의 역할은 상품의 등록, 구매, 결제까지의 과정이었다.
                    <br />
                    최종적으로 이니시스 결제 API를 가져와서 실제로 결제까지 되는 과정을 구현 하였다.
                    <br />
                    상세한 개발 일지는 <a href="https://blog.naver.com/alclsshas511/222036842052" target="_blank">블로그</a>를 방문하여 확인할 수 있다.
                </p>
            </div>
            <div id="project-sidebar" className="col-lg-3">
                <p>
                    <b>Repositories:</b>
                    <a href="https://github.com/JPWon-1/BitCampingSite" target="_blank">Bitcamp Git Repositories</a>
                </p>
                <p>
                    <b>My Role(s):</b>
                    <p>상품등록, 상품 소개, 결제 기능 제작</p> 
                </p>
                <p>
                    <b>Technologies Used:</b><br/>
                    <span className="btn btn-outline-primary btn-sm">Bootstrap</span>
                    <span className="btn btn-outline-primary btn-sm">CSS</span>
                    <span className="btn btn-outline-primary btn-sm">HTML5</span>
                    <span className="btn btn-outline-primary btn-sm">Javascript</span>
                    <span className="btn btn-outline-primary btn-sm">jQuery</span>
                    <span className="btn btn-outline-primary btn-sm">OracleDB</span>
                    <span className="btn btn-outline-primary btn-sm">SpringBoot</span>
                    <span className="btn btn-outline-primary btn-sm">MyBatis</span>
                    <span className="btn btn-outline-primary btn-sm">Github</span>
                </p>
            </div>
        </div>
    );
};

export default Bitcamp;