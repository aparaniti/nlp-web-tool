const webpackConfig = require('./webpack.config.js');

describe('Webpack Configuration', () => {
  it('should have the correct entry points', () => {
    const expectedEntry = {
      server: './src/server/index.js',
      client: './src/client/index.js',
    };
    expect(webpackConfig.entry).toEqual(expectedEntry);
  });

  it('should set the mode based on the environment', () => {
    const isDevelopment = process.env.NODE_ENV === 'development';
    const expectedMode = isDevelopment ? 'development' : 'production';
    expect(webpackConfig.mode).toEqual(expectedMode);
  });

  it('should set the devtool correctly', () => {
    const expectedDevtool = webpackConfig.mode === 'development' ? 'source-map' : false;
    expect(webpackConfig.devtool).toEqual(expectedDevtool);
  });

  it('should have verbose stats', () => {
    expect(webpackConfig.stats).toEqual('verbose');
  });

  it('should define the correct output configuration', () => {
    const expectedOutput = {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
    };
    expect(webpackConfig.output).toEqual(expectedOutput);
  });

  it('should have a Babel loader for JavaScript files', () => {
    const babelRule = webpackConfig.module.rules.find(rule => {
      return rule.test && rule.test.test('.js');
    });

    expect(babelRule).toBeDefined();
    expect(babelRule.loader).toEqual('babel-loader');
  });

  it('should use HtmlWebPackPlugin for HTML generation', () => {
    const htmlPlugin = webpackConfig.plugins.find(
      plugin => plugin instanceof HtmlWebPackPlugin
    );
    expect(htmlPlugin).toBeDefined();
  });

  it('should use CleanWebpackPlugin for cleaning the output directory', () => {
    const cleanPlugin = webpackConfig.plugins.find(
      plugin => plugin instanceof CleanWebpackPlugin
    );
    expect(cleanPlugin).toBeDefined();
  });

  it('should have an alias for "@" resolving to the "src/" directory', () => {
    expect(webpackConfig.resolve.alias['@']).toEqual(path.resolve(__dirname, 'src/'));
  });
});
