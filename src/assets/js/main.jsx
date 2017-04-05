/* The main component for the app
*  Determines the url and what to render
*/

var data = JSON.parse(received_data).d;

ReactDOM.render(
	<Wrapper loggedIn={data.loggedIn} page={Home}/>,
	document.getElementById('app-root')
)
