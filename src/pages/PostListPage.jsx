import React, {useEffect, useState} from 'react'

export default function PostListPage() {
    const [postList, setPostList] = useState(null)

    useEffect(() => {
        const url = 'https://lab.willandskill.eu/api/v1/forum/posts/'
        const token = localStorage.getItem('webb21')
        fetch(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setPostList(data.results)
        })
    }, [])
    return (
        <div>
            {postList && postList.map(item => {
                return <p>{item.title} @{item.author.firstName}</p>
            })}
        </div>
    )
}
