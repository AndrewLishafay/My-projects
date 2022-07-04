import axios from 'axios'
import Comment from './Comment'
interface CommentsProps {
    posts: Array<any>
}
const Comments = (props: CommentsProps) => {
    const { posts } = props
    async function handleForm(ev: any) {
        ev.preventDefault()
        const { email, name, body } = ev.target.elements
        if (email.value === '') {
            ev.target.email.classList.add('alert')
            return
        }
        if (name.value === '') {
            ev.target.name.classList.add('alert')
            return
        }
        if (body.value === '') {
            ev.target.body.classList.add('alert')
            return
        }
        axios.post('https://algoretail.io/test/testAssignComment', {
            email: email.value,
            name: name.value,
            body: body.value
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        ev.target.reset();
    }
    return (
        <div className='comments'>
            <form className='comments__item' onSubmit={handleForm}>
                <label htmlFor="email">Email</label>
                <input type="text" id='email' />
                <label htmlFor="name">Name</label>
                <input type="text" id='name' />
                <label htmlFor="body">Text</label>
                <textarea rows={4} id='body' />
                <input type="submit" value='Send' id='send' />
            </form>
            {posts.map((comment, i) => <Comment key={i} index={i} />)}
        </div>
    )
}

export default Comments