export default {
  blogURL: 'https://www.defectink.com',
  heatmap: 'https://ghchart.rshah.org/409ba5/defectingcat',
  backendURL:
    process.env.NODE_ENV === 'production'
      ? 'https://api.defectink.com/api/rua'
      : 'http://127.0.0.1:4000/',
  waka1: 'http://127.0.0.1:4000/waka/gram1',
  waka2: 'http://127.0.0.1:4000/waka/gram2',
};
