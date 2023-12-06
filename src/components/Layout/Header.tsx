import Link from 'next/link'
import { RiHeart2Line } from "react-icons/ri";


export function Header() {
     return(
        <nav className='flex gap-5 justify-between py-5'>
            <Link href="/">
                <div className='flex items-center gap-1'>
                    {/* <RiHeart2Line style={{color:"#B15EFF",fontSize:"22px",backgroundColor:"#B15EFF"}}/>  */}
                    <h1 className="text-2xl font-bold">💜Chosule Blog</h1>
                </div>
            </Link>
            <ul className="flex gap-5 items-center">
                <li className='font-bold'>
                    <Link href='/'>home</Link>
                </li>
                <li className='font-bold'>
                    <Link href='/about'>About</Link>
                </li>
                <li className='font-bold'>
                    <Link href='/blog'>blog</Link>
                </li>
                <li className='font-bold'>
                    <Link href='/contact'>contact</Link>
                </li>
                <li className='font-bold'>
                    <Link href='/portfolio'>portfolio</Link>
                </li>
            </ul>
        </nav>
     )
}

export default  Header;