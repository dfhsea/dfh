// main.js
export default {
    async fetch(request, env, ctx) {
      // 重新从 Durable Objects 中获取 xx 的值
      const newValue = await env.cx.get('xx');
      return newValue;
    },
  };
  