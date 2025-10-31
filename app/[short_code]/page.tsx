import { redirect, notFound } from 'next/navigation'

async function Redirect({ params }: { params: Promise<{ short_code: string }> }) {

    const code = (await params).short_code
    console.log("Redirecting for code:", code);

    let url: string | null = null;

    try {
        const res = await fetch(`http://localhost:8000/app/links/${code}/`)


        if (res.ok) {
            const data = await res.json();
            url = data.orig_url
        }
        else {
            notFound()
        }

    }
    catch (error) {
        console.error('Error fetching the original URL:', error);
        notFound()
    }

    if (url) {
        console.log("Fetched original URL:", url);
        redirect(url)
    }
    else {
        console.error('Original URL not found');
        notFound()
    }

}

export default Redirect