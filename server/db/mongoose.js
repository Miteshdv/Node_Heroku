const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb+srv://Miteshdv:Mityahoo84@cluster0-dzbcl.mongodb.net/TestDB?retryWrites=true')


module.exports ={ mongoose}