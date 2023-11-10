export async function onRequest(context) {
    const value = await context.env.PORTFOLIO.get("whoami");
    if (value === null) {
      return new Response("Value not found", { status: 404 });
    }
    return new Response(JSON.stringify(value)), 
    {
       headers: {
          "content-type": "application/json;charset=UTF-8",
      }
    });
  }
  
