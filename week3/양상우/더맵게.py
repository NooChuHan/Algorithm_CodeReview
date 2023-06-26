# /**
#  * 1. 힙을 이용해서 1, 맵지 않은 음식, 2번째로 맵지 않은 음식을 뽑아서 스코빌지수를 만든다
#  * 2. 스코빌 지수가 k이상이 되면 종료,
#  * 3. k이상이 되지 않으면 heap에 추가하고 다시 1번으로 돌아간다.
#  *
#  * // 고민
#  * 1. 과연 1,2 번째를 뽑아서 스코빌 지수를 만드는데, 1번뽑고나서 heap을 다시 정렬하고 다음 2번을 뽑는게 과연 효과적인가?
#  */

import heapq

def solution(scoville, K):
    heapq.heapify(scoville)
    answer = 0
    
    while len(scoville) >= 2:
        fstSco = heapq.heappop(scoville)
        if fstSco >= K:
            return answer
        answer += 1
        secSco = heapq.heappop(scoville)
        newSco = fstSco + (secSco * 2)
        heapq.heappush(scoville, newSco)
    
    if scoville[0] >= K:
        return answer
    else:
        return -1
