// 문제 설명
// 한개의 전력망을 둘로 나누어 개수가 최대한 비슷하도록 만드는 문제이다.

// 예시
// n = 9
// wires = [[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]]
// return = 3

function solution(n, wires) {
    var answer = Number.MAX_SAFE_INTEGER;

    // 트리 생성
    let tree = Array.from(Array(n + 1), () => []); // 트리 배열 생성

    wires.map((element) => {
        // wires 배열을 순회하며
        let [a, b] = element; // 요소를 [a, b]로 분해하여 변수 a와 b에 할당

        tree[a].push(b); // a와 연결된 노드 b를 tree[a]에 추가
        tree[b].push(a); // b와 연결된 노드 a를 tree[b]에 추가
    });

    // bfs로 트리 탐색하여 노드 간 거리(간선 수) 계산하는 함수
    function searchTree(root, exceptNum) {
        let count = 0; // 거리(간선 수)를 세는 변수
        let visit = []; // 방문 여부를 표시하는 배열
        let queue = [root]; // 탐색을 위한 큐에 root 노드를 추가
        visit[root] = true; // root 노드를 방문했음을 표시

        while (queue.length) {
            // 큐가 비어있지 않은 동안 반복
            let index = queue.pop(); // 큐에서 요소를 하나 가져옵니다.

            tree[index].forEach((element) => {
                // 해당 노드와 연결된 노드들에 대해 반복
                if (element !== exceptNum && visit[element] !== true) {
                    // exceptNum과 같지 않고, 아직 방문하지 않은 경우
                    visit[element] = true; // 방문했음을 표시
                    queue.push(element); // 큐에 노드를 추가
                }
            });
            count++; // 거리(간선 수)를 증가시킵니다.
        }

        return count; // 거리(간선 수)를 반환
    }

    // 트리를 순회하며 최소값을 찾습니다.
    wires.forEach((element) => {
        // wires 배열을 순회하며
        let [a, b] = element; // 요소를 [a, b]로 분해하여 변수 a와 b에 할당

        // searchTree(a, b)와 searchTree(b, a)를 계산한 절댓값을 비교하여 최솟값을 answer에 할당
        answer = Math.min(
            answer,
            Math.abs(searchTree(a, b) - searchTree(b, a))
        );
    });

    return answer; // 최솟값을 반환
}

solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
]);
