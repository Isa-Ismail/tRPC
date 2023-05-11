import React from 'react'
import Button from './Button'
import ProfileImage from './ProfileImage'
import { useSession } from 'next-auth/react'
import { api } from '~/utils/api'

const NewTweetForm = () => {

    const session = useSession()

    const [inputValue, setInputValue] = React.useState('')

    const user = session.data?.user

    const [height, setHeight] = React.useState("0")

    const createTweet = api.tweet.create.useMutation({
        onSuccess: (newTweet) => {
            console.log(newTweet)
        }
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        createTweet.mutate({ content: inputValue })
        setInputValue('')
    }

    if (session.status !== 'authenticated') return <></>

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-2 border-b px-4 py-2'>
            <div className='flex gap-4'>
                <ProfileImage src={user?.image} />
                <textarea
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                            setHeight('1')
                        }
                    }}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className={`flex flex-grow resize-none overflow-hidden
                     p-4 text-lg outline-none ${height === '0' ? 'h-12' : 'h-80'}`}
                    placeholder="What's happenning?"
                />
            </div>
            <Button className='self-end'>tweet</Button>
        </form>
  )
}

export default NewTweetForm