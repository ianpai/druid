import React from 'react';

function log(Component) {
	return class extends React.Component {
		componentDidMount() {
			console.log('Current props: ', this.props);
		}

		render() {
      // 将 input 组件包装在容器中，而不对其进行修改。Good!
      return <Component {...this.props} />;
    }
	}
}

export default log;
