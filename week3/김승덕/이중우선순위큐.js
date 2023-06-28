// 문제 설명
// "I 83", "D -1", "D -1"과 같은 문자열이 담긴 배열이 매개변수로 주어집니다.
// 이때 I는 큐에 주어진 숫자를 삽입하라는 명령어이며,
// D는 큐에서 최댓값 또는 최솟값을 삭제하라는 명령어입니다.
// 배열이 모두 수행된 후 큐가 비어있으면 [0,0]을,
// 비어있지 않으면 [최댓값, 최솟값]을 return 하면 됩니다.

// 풀이 방법
// 1. 큐를 만든다.
// 2. operations를 순회하면서 큐에 넣는다.
// 3. 큐를 정렬한다.
// 4. D가 나오면 큐에서 최댓값 또는 최솟값을 삭제한다.
// 5. 큐가 비어있으면 [0,0]을, 비어있지 않으면 [최댓값, 최솟값]을 return 한다.

function solution(operations) {
    var answer = [];
    const queue = [];
    operations.map((item) => {
        // operations를 순회하면서 큐에 넣는다.
        const [operation, number] = item.split(" ");
        // console.log(operation, number)
        if (operation === "I") {
            queue.push(Number(number));
            // 큐를 정렬한다. 
            queue.sort((a, b) => a - b);
            
        } else if (operation === "D") {
            if (queue.length !== 0) {
                if (number === "1") {
                    queue.pop();
                } else if (number === "-1") {
                    queue.shift();
                }
            }
        }
    });
    queue.length !== 0
        ? answer.push(queue[queue.length - 1], queue[0])
        : answer.push(0, 0);
    return answer;
}

// ["I 16", "I -5643", "I -12", "I 111", "I -18", "I 123", "I -1145"]
