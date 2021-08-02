import PostItem from './post-item';
import classes from './posts-grid.module.css'

const PostsGrid = (props) => {
    const {posts} = props;
    if(typeof posts === "undefined"){
        return null;
    }
    return <ul className={classes.grid}>
        {posts.map(post => <PostItem  key={post.slug} post={post}/>)}
    </ul>

}

export default PostsGrid