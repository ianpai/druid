import React from 'react';
import * as utils from '../utils';

class Button extends React.Component {

	handleChange = () => {
		console.log(this)
		console.log('点击 + 1')
	}

	render() {
		return (
			<React.Fragment>
				<input onChange={utils.debounce(this.handleChange, 3000)} />
				<input onChange={this.handleChange} />
			</React.Fragment>
		)
	}
}

export default Button;
