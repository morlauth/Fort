class Home extends React.Component {

	render() {
		if (this.props.loggedIn) {
			return <home><nav/></home>
		} else {
			return <home><nav/></home>
		}
	}

}