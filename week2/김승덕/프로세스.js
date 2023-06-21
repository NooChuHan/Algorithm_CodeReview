function solution(priorities, location) {
    let answer = 0;
    // priorities를 순회하면서 {priority, index}로 이루어진 배열을 만듬
    let priorityAndIndex = priorities.map((priority, index) => {
        return { priority, index };
    });
    
    // priorityAndIndex를 순회하면서 현재 process의 priority보다 높은 priority가 있는지 확인
    // 있으면 priorityAndIndex의 맨 뒤로 보냄
    // 없으면 answer++하고 location과 index가 같은지 확인
    // 같으면 answer를 return
    while (priorityAndIndex.length) {
        const process = priorityAndIndex.shift();
        if (priorityAndIndex.some((el) => el.priority > process.priority)) {
            priorityAndIndex.push(process);
        } else {
            answer++;
            if (process.index === location) break;
        }
    }
    return answer;
}
