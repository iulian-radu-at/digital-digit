module.exports = {
  stories: ['./DigitalDigitStories.tsx', './DigitalDigitRawStories.tsx'],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
    disableTelemetry: true,
  },
  features: {
    babelModeV7: true,
    postcss: false,
  },
};
