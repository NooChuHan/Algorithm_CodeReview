// 문제 설명
// 0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내는 문제이다.
// 예시
// [6, 10, 2]가 주어졌을 때, [6102, 6210, 1062, 1026, 2610, 2106]을 만들 수 있다.
// 이 중 가장 큰 수는 6210이다.
// 고민한 부분
// 테스트케이스 11번의 경우 numbers의 모든 요소가 0인 경우이다. 이 경우에는 “0” 이 반환되어야하는데 “0000” 과 같이 0이 여러개 join되어 반환되어 문제가 된다.
// Number() 로 묶고 다시 String() 으로 묶어서 해결하려고했으나, 숫자가 int의 범위보다 큰 경우 에러가 발생한다.
// 따라서 0일때 따로 처리를 해주어야한다.

function solution(numbers) {
    // numbers를 정렬한다.
    // a, b를 문자열로 변환한 후 b + a순서로 했을때가 큰지 a + b순서로 했을때가 큰지 비교한다.
    numbers.sort((a, b) => {
        a = String(a);
        b = String(b);
        return (b + a) - (a + b);
    });
    // numbers의 모든 요소가 0이면 "0"을 반환한다.
    const isAllZero = numbers.every((item) => item === 0);
    // numbers를 문자열로 변환하여 반환한다.
    return isAllZero ? "0" : numbers.join("");
}
