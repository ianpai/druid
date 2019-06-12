import React from 'react';

function log(WrappedComponent) {
	return class extends React.Component {
		componentDidMount() {
			console.log('Current props: ', this.props);
		}

		render() {
      // 将 input 组件包装在容器中，而不对其进行修改。Good!
      return <WrappedComponent {...this.props} />;
    }
	}
}

export default log;
