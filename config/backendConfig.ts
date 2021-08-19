export default {
  blogURL: 'https://www.defectink.com',
  heatmap:
    process.env.NODE_ENV === 'production'
      ? 'https://api.defectink.com/rua/heatmap'
      : 'http://127.0.0.1:4000/heatmap',
  backendURL:
    process.env.NODE_ENV === 'production'
      ? 'https://api.defectink.com/rua'
      : 'http://127.0.0.1:4000/',
  waka1:
    process.env.NODE_ENV === 'production'
      ? 'https://api.defectink.com/rua/waka/gram1'
      : 'http://127.0.0.1:4000/waka/gram1',
  waka2:
    process.env.NODE_ENV === 'production'
      ? 'https://api.defectink.com/rua/waka/gram2'
      : 'http://127.0.0.1:4000/waka/gram2',
};
