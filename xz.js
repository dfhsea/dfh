export async function fetch(request, env, ctx) {
  // 重新从 Durable Objects 中获取 xx 的值
  const 11newValue = await env.cx.get('xx');
  return 11newValue;
}