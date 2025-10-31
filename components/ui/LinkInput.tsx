"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { useState } from "react"
import { Spinner } from "./spinner"
import { requestlink } from "@/app/actions"


export default function LinkInput() {
    const [generatedUrl, setGeneratedUrl] = useState<string>("generated link will appear here");
    const [isGenerating, setIsGenerating] = useState<boolean>(false);
    const [inputUrl, setInputUrl] = useState<string>("");
    const [errorMsg, setErrorMsg] = useState<string>("");

    async function requestShortLink() {
        if (!validateUrl(inputUrl)) {
            setErrorMsg("Please enter a valid URL.");
            return;
        }

        try {
            setIsGenerating(true);
            setErrorMsg("");

            const res = requestlink(inputUrl)

            if ((await res).success) {
                setGeneratedUrl((await res).url!)
            }
            else {
                setErrorMsg((await res).error!)
            }
        }
        catch (error) {
            console.error("Error generating short link:", error);
            setErrorMsg("Failed to generate short link. Please try again.");
        }
        finally {
            setIsGenerating(false);
        }

    }

    function copyToClipboard() {
        navigator.clipboard.writeText(generatedUrl);
    }

    function validateUrl(url: string): boolean {
        try {
            new URL(url);
            return true;
        } catch (e) {
            console.log("Invalid URL:", e);
            return false;
        }
    }

    return (
        <div className={"flex flex-col w-full max-w-lg items-center gap-2 mx-4 py-4"}>
            <div className="flex justify-center items-center gap-4 w-full my-3">
                <Input type="url"
                    placeholder="Enter URL"
                    className="bg-white/10 text-white "
                    value={inputUrl}
                    onChange={(e) => setInputUrl(e.target.value)}
                />

                {isGenerating ?
                    <div className="bg-white text-primary-black h-9 px-4 py-2 has-[>svg]:px-3 rounded-full flex justify-center items-center">
                        <Spinner />
                    </div>
                    :
                    <Button type="button" onClick={requestShortLink} variant="outline" className="hover:bg-blue-700 hover:text-white hover:border-blue-700">
                        Generate
                    </Button>
                }

            </div>
            <p className="text-red-700">{errorMsg}</p>
            <div className="w-full h-10 bg-gray-800 rounded-2xl p-4 text-white relative flex justify-center items-center">
                <p>{generatedUrl}</p>
                <Button
                    className="absolute right-0 p-4 bg-transparent"
                    onClick={copyToClipboard}>
                    <Image
                        src={'/copy-white.svg'}
                        alt='Copy Link'
                        width={16}
                        height={16} ></Image>
                </Button>
            </div>
        </div>
    )
}
