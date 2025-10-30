import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { ClassNameValue } from "tailwind-merge"

interface LinkInputProps {
    className?: ClassNameValue
}

export default function LinkInput({ className }: LinkInputProps) {
    return (
        <div className={cn("flex w-full max-w-sm items-center gap-2 m-4", className)}>
            <Input type="url" placeholder="Enter URL" />
            <Button type="submit" variant="outline">
                Generate
            </Button>
        </div>
    )
}
