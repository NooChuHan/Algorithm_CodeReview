# scoville을 heapify를 한다.
# -> 최솟값이 K보다 작을때 까지 반복한다.
# -> 값이 유효하지 않다면 -1을 아니라면, 값을 반환

import heapq

def solution(scoville, K):
    answer = 0
    heapq.heapify(scoville)
    
    # NOTE: 최솟값이 K보다 작고 유효하다면 루프를 돈다.
    while scoville[0] < K and len(scoville) > 1:
        first: int = heapq.heappop(scoville)
        second: int = heapq.heappop(scoville)
        
        heapq.heappush(scoville, first + (second * 2))
        
        answer += 1

    return answer if scoville[0] >= K else -1
