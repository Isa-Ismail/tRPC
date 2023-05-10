import React from 'react'
import Button from './Button'
import ProfileImage from './ProfileImage'
import { useSession } from 'next-auth/react'

const NewTweetForm = () => {

    const session = useSession()

    if (session.status !== 'authenticated') return <></>

    const user = session.data?.user
    return (
        <form className='flex flex-col gap-2 border-b px-4 py-2'>
            <div className='flex gap-4'>
                <ProfileImage src={user?.image} />
                <textarea
                    className='flex flex-grow resize-none overflow-hidden
                     p-4 text-lg outline-none'
                    placeholder="What's happenning?"
                />
            </div>
            <Button className='self-end'>tweet</Button>
        </form>
  )
}

export default NewTweetForm