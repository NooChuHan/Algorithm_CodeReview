# 최소힙, 최대힙을 이용하여 풀이
# -> 최소힙, 최대힙 2개를 이용한다.
# -> if 삽입이라면, 최소힙, 최대힙에 모두 삽입한다.
# -> elif 삭제라면, 해당 케이스에서 삭제하되, 다른 힙도 동기화를 해줘야 한다.
# -> 빈 리스트라면, [0, 0]을, 아니라면 [최대힙의 최댓값, 최소힙의 최솟값]을 반환한다.

import heapq

def solution(operations):
    max_heap = []
    min_heap = []
    
    for operation in operations:
        unit, val = operation.split()
        num = int(val)
        
        # NOTE: I이면 그냥 삽입한다.
        if unit == 'I':
            heapq.heappush(max_heap, (-num, num))
            heapq.heappush(min_heap, num)
        # NOTE: D이고 삭제할 수 있으면 삭제한다.
        elif unit == 'D' and len(max_heap) != 0:
            if num == 1:
                (_, value) = heapq.heappop(max_heap)
                min_heap.remove(value)
            elif num == -1:
                value = heapq.heappop(min_heap)
                max_heap.remove((-value, value))
        
    return [0, 0] if len(max_heap) == 0 and len(min_heap) == 0 else [heapq.heappop(max_heap)[1],heapq.heappop(min_heap)]
