import React, { useState, useEffect } from 'react'

import useMousePosition from '../hooks/useMousePosition'

const LikeButton: React.FC = () => {
    const [like, setLike] = useState(0)
    const [on, setOn] = useState(true)

    const positions = useMousePosition()
    useEffect(() => {
        document.title = `点击了${like}次`
    })
    return <>
        <h2>x: {positions.x}, y: {positions.y}</h2>

        <button onClick={() => { setLike(like + 1) }}>
            {like} 👍
        </button>
        <button onClick={() => { setOn(!on) }}>{on ? 'on' : 'off'}</button>
    </>
}

export default LikeButton