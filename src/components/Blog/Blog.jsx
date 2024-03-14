import PropTypes from 'prop-types'; 

const Blog = ({blog}) => {
    const {id, title, author_name, cover_img, reading_time, author_img, posted_date, hashtags}= blog;
    return (
        <div>
            <img className='h-[450px] w-[600px]' src={cover_img} alt={`Cover picture of ${title}`} />
            <div className='flex justify-between'>
                <div className='flex gap-6'>
                    <img className='w-[60px] h-[60px] rounded-[60px]' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author_name}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>{hashtags.map((hashtag, idx) => <span className='mr-2' key={idx}><a href=''>{hashtag}</a></span>)}</p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;