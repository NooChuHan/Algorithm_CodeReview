import heapq

def solution(jobs):
    job_list = sorted(jobs)  # NOTE: 작업 리스트를 시작 시간 기준으로 정렬
    total_jobs = len(job_list)
    current_time = 0
    processed_jobs = 0
    total_response_time = 0
    
    min_heap = []  # NOTE: 최소 힙으로 시작 시간 기준으로 작업을 추출하기 위한 우선순위 큐
    
    while processed_jobs < total_jobs:
        # NOTE: 현재 시간 이전에 시작하는 작업들을 추출하여 최소 힙에 저장
        while job_list and job_list[0][0] <= current_time:
            start_time, process_time = job_list.pop(0)
            heapq.heappush(min_heap, (process_time, start_time))
        
        if min_heap:
            process_time, start_time = heapq.heappop(min_heap)
            current_time += process_time
            processed_jobs += 1
            total_response_time += (current_time - start_time)
        else:
            current_time += 1
    
    return total_response_time // total_jobs
