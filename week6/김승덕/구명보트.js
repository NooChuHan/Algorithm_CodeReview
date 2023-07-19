// 문제 설명
// 무인도에 갇힌 사람들 리스트를 받아서 구명보트를 최소한으로 사용하여 모든 사람을 구출하는 문제

// 예시
// people = [70, 50, 80, 50], limit = 100
// return 3

function solution(people, limit) {
    var answer = 0; // 보트 수를 저장하는 변수 초기화
    people.sort((a, b) => b - a); // 사람들을 내림차순으로 정렬하여 큰 숫자부터 처리

    for (var i = 0, j = people.length - 1; i <= j; i++) {
        // 배열을 탐색하는 반복문
        // i는 배열의 시작 부분을 가리키고, j는 배열의 끝 부분을 가리킴

        if (people[i] + people[j] <= limit) {
            // 현재 i와 j 인덱스의 사람의 무게를 합한 값이 limit 이하인 경우
            // i와 가장 무거운 사람 j가 함께 탈 수 있음
            j--; // j를 감소시킴 (다음으로 무거운 사람을 고려하기 위해)
        }

        answer++; // 보트 수를 1 증가
    }

    return answer; // 필요한 보트 수 반환
}
