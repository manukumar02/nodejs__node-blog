const config = {
  // port
  port: process.env.PORT || 3000,

  // database
  db: 'mongodb://localhost/blog-node',

  // test environment
  test_env: 'test',
  test_db: 'blog-node-test',
  test_port: 3001
};

export default config;
