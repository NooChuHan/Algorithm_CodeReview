import java.util.PriorityQueue;

public class MoreSpicy {

    public int solution(int[] scoville, int K) {
        int answer = 0;

        PriorityQueue<Integer> pQ = new PriorityQueue<>();
        for(int x: scoville){
            pQ.add(x);
        }
        while(pQ.peek()<K){
            if(pQ.size()==1){
                return -1;
            }
            int a = pQ.poll();
            int b = pQ.poll();

            int tmp = a+2*b;
            pQ.offer(tmp);
            answer++;


        }
        return answer;
    }
}
