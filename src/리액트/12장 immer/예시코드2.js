import produce from 'immer';

const originalState = [
    {
        id : 1,
        todo : '전개 연산자와 배열 내장 함수로 불변성 유지',
        checked : true,
    },
    {
        id : 2,
        todo : 'immer로 불변성 유지',
        checked: false,
    }
];

const nextState = produce(originalState , draft => {
    / id가 2인 항목의 checked 값을 true로 설정
    const todo = draft.find(t => t.id === 2);   / id로 항목 찾기
    todo.checked = true;
        / 혹은 draft[1].checked = true;
        /배열에 새로운 데이터 추가
    draft.push({
        id : 3,
        todo : '일정 관리 앱에 immer 적용',
        checked : false,
    });
        // ud = 1인 항목을 제거
    draft.splice(draft.findIndex(t => t.id === 1) ,1);
});


