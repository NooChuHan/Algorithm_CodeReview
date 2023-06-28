import java.util.Arrays;
import java.util.PriorityQueue;

public class DiskController {


    public int solution(int[][] jobs) {
        int answer = 0;


        PriorityQueue<Point> pQ = new PriorityQueue<>();

        Arrays.sort(jobs, (a, b) -> a[0] - b[0]);


        int complete = 0;
        int n = jobs.length;
        int currentTime = 0;
        int jobIndex = 0;
        int sum = 0;
        while (complete != n) {

            while (jobIndex < n && jobs[jobIndex][0] <= currentTime) {
                pQ.offer(new Point(jobs[jobIndex][0], jobs[jobIndex][1]));
                jobIndex++;
            }
            if (pQ.isEmpty()) {
                currentTime = jobs[jobIndex][0];
            } else {
                Point tmp = pQ.poll();
                sum += tmp.y + currentTime - tmp.x;
                currentTime += tmp.y;
                complete++;
            }
        }

        return sum / n;

    }
}

class Point implements Comparable<Point> {
    int x, y;

    Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    @Override
    public int compareTo(Point o) {

        return this.y - o.y;
    }
}

