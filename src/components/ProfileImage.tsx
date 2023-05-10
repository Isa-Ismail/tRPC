import Image from 'next/image'
import React from 'react'

type Props = {
    src?: string | null,
    className?: string
}

const ProfileImage: React.FC<Props> = (
    {src,
    className}
) => {
    return <div className={`relative h-12 w-12 overflow-hidden
    rounded-full ${className}`}>
        {src ? <Image src={src} alt='profile' quality={100} fill /> : null}
  </div>
}

export default ProfileImage