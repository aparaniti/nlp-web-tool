const webpackConfig = require('./webpack.config.js');

describe('Webpack Configuration', () => {
  it('should have the correct entry point', () => {
    expect(webpackConfig.entry).toEqual('./src/client/index.js');
  });

  it('should set the mode based on the environment', () => {
    const isDevelopment = process.env.NODE_ENV === 'development';
    const expectedMode = isDevelopment ? 'development' : 'production';
  
    const argvMode = process.argv.includes('--mode');
    if (argvMode) {
      const modeIndex = process.argv.indexOf('--mode');
      if (modeIndex !== -1 && process.argv.length > modeIndex + 1) {
        const mode = process.argv[modeIndex + 1];
        if (mode === 'development' || mode === 'production') {
          process.env.NODE_ENV = mode;
        }
      }
    }
  
    expect(webpackConfig.mode).toEqual(expectedMode);
  });
  

  it('should have a Babel loader for JavaScript files', () => {
    const babelRule = webpackConfig.module.rules.find(rule => {
      return rule.test && rule.test.test('.js');
    });

    expect(babelRule).toBeDefined();
    expect(babelRule.loader).toEqual('babel-loader');
  });

  it('should use GenerateSW plugin for service workers', () => {
    const generateSWPlugin = webpackConfig.plugins.find(
      plugin => plugin instanceof GenerateSW
    );
    expect(generateSWPlugin).toBeDefined();
  });

  it('should use HtmlWebPackPlugin for HTML generation', () => {
    const htmlPlugin = webpackConfig.plugins.find(
      plugin => plugin instanceof HtmlWebPackPlugin
    );
    expect(htmlPlugin).toBeDefined();
  });

  it('should have an alias for "@" resolving to the "src/" directory', () => {
    expect(webpackConfig.resolve.alias['@']).toEqual(path.resolve(__dirname, 'src/'));
  });

  it('should target the web environment', () => {
    expect(webpackConfig.target).toEqual('web');
  });

  it('should exclude node_modules for production build', () => {
    const externals = webpackConfig.externals;
    
    const isDevelopment = process.env.NODE_ENV === 'development';

    if (isDevelopment) {
      expect(externals).toEqual([]);
    } else {
      expect(externals).toEqual([nodeExternals()]);
    }
  });
});
