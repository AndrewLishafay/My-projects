import { useEffect, useState } from "react"
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-avataaars-sprites';

interface Message {
    id: number,
    email: string,
    name: string,
    body: string
}
interface CommentProps {
    index: number
}
let avatar: any;

const Comment = (props: CommentProps) => {
    const { index } = props
    const [data, setData] = useState<Message>();
    useEffect(() => {
        (async () => {
            fetch(`https://jsonplaceholder.typicode.com/comments/${index + 1}`)
                .then(response => response.json())
                .then(json => setData(json));
        })()
    }, [])
    useEffect(() => {
        if (data) {
            avatar = createAvatar(style, {
                seed: (data.email + index)
            });
        }
    }, [data])

    return (
        <div className='comments__item'>
            {data &&
                <>
                    <div className='comments__item__info'>
                        <div className='comments__item__info__user'>
                            <img src={`data:image/svg+xml;utf8,${encodeURIComponent(avatar)}`} alt="" />
                            <h3>by: {data.email}</h3>
                        </div>
                        <h3>{data.name}</h3>
                    </div><div className='comments__item__body'>
                        <p>{data.body}</p>
                    </div>
                </>
            }
        </div>
    )
}

export default Comment