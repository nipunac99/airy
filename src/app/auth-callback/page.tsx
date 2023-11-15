import { useRouter, useSearchParams } from "next/navigation"

const Page = () => {
        const router = useRouter()

        const searchParams = useSearchParams()
        const origin = useSearchParams.get('origin')

        const apiResponse = await fetch('/api/whatever')
        const data 

}

export default Page