export function onRequest(context) {
    const value = context.env.PORTFOLIO.list();
    return new Response(value.keys);
  }
  