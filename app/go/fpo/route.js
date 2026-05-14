const URLS = [
    "https://fpo.digitalwaveitsolution.online",
    "https://fpo.jasrapurgsss.online",
    "https://fpo-zeta.vercel.app"
];

export async function GET() {
    for (const url of URLS) {
        try {
            const res = await fetch(url, {
                method: "HEAD",
                cache: "no-store"
            });

            if (res.ok) {
                return Response.redirect(url, 302);
            }
        } catch { }
    }

    return Response.redirect("https://fpo-zeta.vercel.app", 302);
}