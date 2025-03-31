function Calc(){

	const  [x, setX] =React.useState(10);
	const  [y, setY] =React.useState(20);
	const  [result, setResult] =React.useState(0);

	function clickHandler(e){
		e.preventDefault();
		//result = x + y;
		setResult(Number(x)+Number(y));
	}

	return <section id="calc-app">
  	<h1>덧셈 계산기</h1>
  	<form>
    	<fieldset>
      		<legend>계산기 입력폼</legend>
      		<div>
            	<label>x:</label>
        		<input class="x-input" dir="rtl" value={x} onChange={(e)=>setX(e.target.value)}/>
            	<label>y:</label>
        		<input class="y-input" dir="rtl" value={y} onChange={(e)=>setY(e.target.value)}/>
            	<span>=</span>
            	<span class="result">{result}</span>
      		</div>
      		<hr />
      	<div>
        	<input type="submit" value="초기화" />
        	<input onClick={clickHandler} class = "submit-input" type="submit" value="계산하기" />
      	</div>
    	</fieldset>
  	</form>
	</section>
}

ReactDOM.render(
    <Calc />,
    document.getElementById('root')
);