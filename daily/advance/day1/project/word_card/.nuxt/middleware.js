const middleware = {}

middleware['userAuth'] = require('../middleware/userAuth.js');
middleware['userAuth'] = middleware['userAuth'].default || middleware['userAuth']

export default middleware
