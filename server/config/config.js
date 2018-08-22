var env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb+srv://Miteshdv:Mityahoo84@cluster0-dzbcl.mongodb.net/DevDB?retryWrites=true';
} else if (env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb+srv://Miteshdv:Mityahoo84@cluster0-dzbcl.mongodb.net/TestDB?retryWrites=true';
}
