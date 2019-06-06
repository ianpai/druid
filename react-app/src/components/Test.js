import React from 'react';
import { AreaContext } from '../constant/areadata';

export default class Test extends React.Component {

  render() {
		const areadata = this.context;

    return (
			<div>
				{areadata.map(item => <span>{item.label}</span>)}
			</div>
		)
  }
}

Test.contextType = AreaContext;
