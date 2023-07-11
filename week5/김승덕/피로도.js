// 문제 설명
// K 피로도를 가지고 있습니다. K 피로도로 던전을 돌아다니면서 던전을 클리어하면 피로도가 감소합니다. 던전을 클리어하면서 피로도가 0이 되면 던전을 더 이상 클리어할 수 없습니다. 던전을 클리어할 때마다 피로도가 얼마나 감소하는지가 담긴 2차원 배열 dungeons가 매개변수로 주어집니다. 이때, 던전을 최대 몇 개까지 클리어할 수 있는지 return 하도록 solution 함수를 완성해주세요.

// 예시
// K : 80
// dungeons : [[80, 20], [50, 40], [30, 10]]
// return : 3

function solution(k, dungeons) {
    const length = dungeons.length; // 던전 배열의 길이 저장
    const visited = Array(length).fill(false); // 던전 방문 여부를 저장하는 배열 생성 및 초기화
    let answer = 0; // 결과값을 저장할 변수

    // 깊이 우선 탐색 함수 (DFS)
    const dfs = (currentK, cnt) => {
        for (let i = 0; i < length; i++) {
            if (!visited[i] && currentK >= dungeons[i][0]) {
                // 방문하지 않았고 현재 체력이 해당 던전의 체력 필요량보다 크거나 같을 경우
                visited[i] = true; // 해당 던전을 방문으로 체크

                dfs(currentK - dungeons[i][1], cnt + 1); // 재귀적으로 다음 던전 탐색

                visited[i] = false; // 백트래킹을 위해 방문 여부를 다시 false로 변경
            }
        }

        answer = Math.max(answer, cnt); // 현재까지의 최대 탐색 횟수를 갱신
        return;
    };

    dfs(k, 0); // 조합 함수 호출

    return answer; // 결과값 반환
}
