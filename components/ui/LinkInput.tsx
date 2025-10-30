import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"


export default function LinkInput() {
    return (
        <div className={"flex flex-col w-full max-w-lg items-center gap-2 m-4 "}>
            <div className="flex justify-center items-center gap-4 w-full my-3">
                <Input type="url" placeholder="Enter URL" className="flex-auto bg-white-50 text-white" />
                <Button type="submit" variant="outline" className="flex-0 hover:bg-blue-700 hover:text-white hover:border-blue-700">
                    Generate
                </Button>

            </div>
            <div className="w-full h-10 bg-gray-800 rounded-2xl p-4 text-white relative flex justify-center items-center">
                <p>nothing generated</p>
                <Button className="absolute right-0 p-4 bg-transparent">
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
