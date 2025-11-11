import { redirect, notFound } from 'next/navigation'
import { get_orig_link, update_clicks } from '../actions';

async function Redirect({ params }: { params: Promise<{ short_code: string }> }) {

    const code = (await params).short_code
    console.log("Redirecting for code:", code);


    const res = await get_orig_link(code)

    if (res.success === true && res.url) {
        console.log("Fetched original URL:", res.url);
        await update_clicks(code)
        redirect(res.url)
    }
    else {
        notFound()
    }

}

export default Redirect