import React from 'react'
import { DetailedHTMLProps } from 'react'
type Props = {
    small?: boolean,
    children: React.ReactNode,
    gray?: boolean,
    className?: string
} & DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

const Button: React.FC<Props> = ({
    small = false,
    children,
    gray = false,
    className = '',
    ...props
}) => {

    const sizeClasses = small ? 'px-2 py-1 text-sm' : 'px-4 py-2 text-lg'
    const colorClasses = gray ? 'bg-gray-400 hover:bg-grey-300 focus-visible:bg-gray-300'
        : 'bg-blue-500 hover:bg-blue-400 focus-visible:bg-blue-400'

    return (
        <button className={`rounded-full transition-colors duration-200
            disabled:opacity-50 disabled:cursor-not-allowed text-white
            ${sizeClasses} ${colorClasses} ${className}
        `} {...props}>
            {children}
        </button>
    )
}

export default Button