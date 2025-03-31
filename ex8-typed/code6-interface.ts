{
    class Exam {
        constructor(public kor: number, public eng: number) {}
        total(){
            return this.kor + this.eng;
        }
    }

    const exam: Exam = new Exam(100, 90);
    console.log(exam.total()); // 190
    
}

{

    interface Exam {
        kor: number;
        eng: number;
        total(): number;
    }

    class ExampImp1 implements Exam {
        constructor(public kor: number, public eng: number) {}
        total() {
            return this.kor + this.eng;
        }
    }

    const exam: Exam = new ExampImp1(100, 90);
    console.log(exam.total()); // 190
}