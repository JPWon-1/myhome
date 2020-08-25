import React from 'react';

const Todo = () => {
    return (
        <div className="row">
            <div id="project-container" className="col-lg-9">
            <p>
                    <b>ToDos</b>는 할 일을 정리하고 순서대로 나열하여 리스트를 만드는 앱이다.<br />
                    이 앱은 <a href="https://book.naver.com/bookdb/book_detail.nhn?bid=15372757" target="_blank">리액트를 다루는 기술</a>을 공부하면서 실습 예제로 만들게 된 사이트이다.
                    <br/>
                </p>
                <p>
                    Todo리스트에 새로운 항목을 추가, 제거, 토글 하는 기능들을 추가하며 React에서 어떠한 방법으로 컴포넌트를 제어하는지 배웠다.
                    <br/>
                    또한 Todo리스트가 수천개로 늘어났을 경우 데이터들을 처리하는데에 있어 속도저하를 나타냈었는데 
                    <br/>
                    이러한 이슈는 React.memo를 사용하여 컴포넌트 성능을 최적화 하였고, 불필요한 리렌더링이 없도록 하였다.
                </p>
            </div>
            <div id="project-sidebar" className="col-lg-3">
                <p>
                    <b>Repositories:</b>
                    <a href="https://github.com/JPWon-1/ToDos">ToDo-App</a>
                </p>
                <p>
                    <b>My Role(s):</b>
                    <p>제작</p> 
                </p>
                <p>
                    <b>Technologies Used:</b><br/>
                    <span className="btn btn-outline-primary btn-sm">ReactJS</span>
                    <span className="btn btn-outline-primary btn-sm">Github</span>
                    <span className="btn btn-outline-primary btn-sm">SCSS</span>
                </p>
            </div>
        </div>
    );
};

export default Todo;