// 문제 설명
// 한개의 전력망을 둘로 나누어 개수가 최대한 비슷하도록 만드는 문제이다.

// 예시
// n = 9
// wires = [[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]]
// return = 3

function solution(n, wires) {
    var answer = Number.MAX_SAFE_INTEGER;
    
    let tree = Array.from(Array(n + 1), () => []);

    // 트리 생성
    wires.map((element) => {
        let [a, b] = element;

        tree[a].push(b);
        tree[b].push(a);
    });
    // bfs 
    function searchTree(root, exceptNum) {
        let count = 0;
        let visit = [];
        let queue = [root];
        visit[root] = true;
        while (queue.length) {
            let index = queue.pop();
            tree[index].forEach((element) => {
                if (element !== exceptNum && visit[element] !== true) {
                    visit[element] = true;
                    queue.push(element);
                }
            });
            count++;
        }

        return count;
    }
    // 트리를 순회하며 최소값을 찾는다.
    wires.forEach((element) => {
        let [a, b] = element;
        answer = Math.min(
            answer,
            Math.abs(searchTree(a, b) - searchTree(b, a))
        );
    });
    return answer;
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
