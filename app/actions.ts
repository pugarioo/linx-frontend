'use server'

interface ResponseData {
    short_code: string;
}

interface ActionResponse {
    success: boolean,
    url?: string,
    error?: string
}

export async function requestlink(inputUrl: string): Promise<ActionResponse> {

    const backendURL = process.env.BACKEND_URL
    const page = process.env.PAGE_DOMAIN

    try {
        const res = await fetch(`${backendURL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "orig_url": inputUrl }),
        })

        if (!res.ok) {
            throw new Error(`Error: ${res.status} ${res.statusText}`);
        }

        const data: ResponseData = await res.json()

        return {
            success: true,
            url: `${page}${data.short_code}`
        }
    }
    catch (error) {
        console.error("Error generating short link:", error);
        return {
            success: false,
            error: "Failed to generate short link. Please try again."
        }
    }

}
