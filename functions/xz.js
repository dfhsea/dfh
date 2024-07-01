addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  // 假设 d1 的值通过环境变量获取
  const d1Value = env.d1;

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>D1 值展示</title>
    </head>
    <body>
      <h1>D1 的值为: ${d1Value}</h1>
    </body>
    </html>
  `;

  const headers = { 'Content-Type': 'text/html' };
  return new Response(html, { headers });
}