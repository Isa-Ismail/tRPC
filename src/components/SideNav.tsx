import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

interface Props {}

const SideNav = () => {
    const session = useSession()
    const user = session.data?.user
    console.log(user)
    return (
        <nav className='sticky top-0 px-2 py4'>
            <ul className='flex flex-col items-start gap-2 whitespace-nowrap'>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                {user !== null && <li>
                    <Link href={`/profiles/${user?.name}`}>profiles</Link>
                </li>}
                {user == null ? (
                    <li>
                        <button onClick={()=>void signIn()}>Sign in</button>    
                    </li>
                ): <li>
                        <button onClick={()=>void signOut()}>Log Out</button>    
                    </li>}
            </ul>
        </nav>
    )
}

export default SideNav