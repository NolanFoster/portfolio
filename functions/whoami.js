export async function onRequest(context) {
    const value = await context.env.PORTFOLIO.get("whoami");
    if (value === null) {
      return new Response("Value not found", { status: 404 });
    }
    return new Response(JSON.parse(JSON.stringify(value)));
  }
  
