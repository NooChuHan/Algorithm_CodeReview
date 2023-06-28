import java.util.Arrays;

class Main{
    public static void main(String[] args) {

        DiskController diskController = new DiskController();
        MoreSpicy moreSpicy = new MoreSpicy();

        int[] q1Input1 = {1, 2, 3, 9, 10, 12};
        int q1Input2 = 7;

        int myAnswer1 = moreSpicy.solution(q1Input1,q1Input2);
        int answer = 2;

        Checker.testCaseChecker(myAnswer1,answer);


        int[][] q2Input = {{0, 3}, {1, 9}, {2, 6}};

        int myAnswer2 = diskController.solution(q2Input);
        int answer2 = 9;

        Checker.testCaseChecker(myAnswer2, answer2);
    }

}

class Checker{
    public static <T> void testCaseChecker(T yourAnswer, T answer){
        boolean isCorrect = false;

        if (yourAnswer.getClass().isArray() && answer.getClass().isArray()) {
            isCorrect = Arrays.deepEquals(new Object[]{yourAnswer}, new Object[]{answer});
        } else {
            isCorrect = yourAnswer.equals(answer);
        }

        if(isCorrect){
            System.out.println("정답입니다.");
            System.out.println("answer = " + yourAnswer);
        }else{
            System.out.println("땡!!!!");
            System.out.println("yourAnswer = " + yourAnswer);
        }
    }
}
