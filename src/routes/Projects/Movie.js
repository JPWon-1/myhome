import React from 'react';

const Movie = () => {
    return (
        <div className="row">
            <div id="project-container" className="col-lg-9">
                <p>
                    <b>Movie-App</b>사이트는 영화 소개 사이트이다.
                    <br/>
                    영화의 포스터와 정보 그리고 줄거리 등을 제공한다
                    <br/>
                    영화의 데이터는 YTS라는 영화 토렌트 사이트에서 가져왔다.
                    <br />
                    영화의 모든 정보는 영어로 표시되어 있으며 따라서 검색도 영어로 이뤄져야 하고, 찾고자 하는 영화가 없을수도 있다.
                    <br />
                </p>
                <p>
                    이는 ReactJS를 사용한 첫번째 웹 서비스로서, <a href="https://nomadcoders.co/courses" target="_blank">노마드코더</a>의 강의를 보고 따라한 클론코딩이다.
                    <br />
                    이 프로젝트에서 리액트의 설치, State, Routing 을 공부 하였다.
                    <br />
                    최종적으로 이니시스 결제 API를 가져와서 실제로 결제까지 되는 과정을 구현 하였다.
                    <br />
                    상세한 개발 일지는 <a href="https://blog.naver.com/alclsshas511/222043213666" target="_blank">블로그</a>를 방문하여 확인할 수 있다.
                </p>
            </div>
            <div id="project-sidebar" className="col-lg-3">
                <p>
                    <b>Repositories:</b>
                    <a href="https://github.com/JPWon-1/movie_app_2020" target="_blank">Bitcamp Git Repositories</a><br/>
                    <b>Site:</b>
                    <a href="https://jpwon-1.github.io/movie_app_2020/#/" target="_blank">Bitcamp Git Repositories</a>
                </p>
                <p>
                    <b>My Role(s):</b>
                    <p>제작, 배포</p> 
                </p>
                <p>
                    <b>Technologies Used:</b><br/>
                    <span className="btn btn-outline-primary btn-sm">ReactJS</span>
                    <span className="btn btn-outline-primary btn-sm">Github</span>
                    <span className="btn btn-outline-primary btn-sm">YTS-API</span>
                </p>
            </div>
        </div>
    );
};

export default Movie;