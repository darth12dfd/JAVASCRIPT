class Calc extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			x: 10,
			y: 20,
			result: 0
		};
		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler(e) {
		e.preventDefault();z
		this.setState({
			result: Number(this.state.x) + Number(this.state.y)
		});
		console.log("in handler");
	}

	render() {
		return (
			<section id="calc-app">
				<h1>덧셈 계산기</h1>
				<form>
					<fieldset>
						<legend>계산기 입력폼</legend>
						<div>
							<label>x:</label>
							<input
								className="x-input"
								dir="rtl"
								value={this.state.x}
								onChange={(e) => this.setState({ x: e.target.value })}
							/>
							<label>y:</label>
							<input
								className="y-input"
								dir="rtl"
								value={this.state.y}
								onChange={(e) => this.setState({ y: e.target.value })}
							/>
							<span>=</span>
							<span className="result">{this.state.result}</span>
						</div>
						<hr />
						<div>
							<input type="submit" value="초기화" />
							<input
								onClick={this.clickHandler}
								className="submit-input"
								type="submit"
								value="계산하기"
							/>
						</div>
					</fieldset>
				</form>
			</section>
		);
	}
}

ReactDOM.render(<Calc />, document.getElementById('root'));