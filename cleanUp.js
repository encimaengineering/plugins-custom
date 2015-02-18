/* plugin - clean up values */
function cleanUp (value) {
	return value.toLowerCase().replace("-"," ").replace(".html","");   
}