
import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { buttonVariants } from "./ui/button"
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs"




/** 01.11.31 */
const Navbar = () => {
    return (
        <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all ">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link href='/' 
                        className="flex z-400 font-semibold">
                        <span>Airy</span>
                    </Link>

                    {/** todo: add mobile navbar */}
                    <div className="hidden items-center space-x-4 sm:flex">
                        <>
                            <Link
                            href='/pricing'
                            className={buttonVariants({
                                variant: "ghost",
                                size: 'sm',
                            })}>
                            Pricing
                            </Link>
                            {/* <LoginLink
                            className={buttonVariants({
                                variant: "ghost",
                                size: 'sm',
                            })}>
                                Sign in
                            </LoginLink> */} {/** <-- Look at later  */}
                        </>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar