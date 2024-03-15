import PropTypes from 'prop-types';
import { IoBookmark } from "react-icons/io5"; 

const Blog = ({blog, handleAddToBookmark, handleReadingTime}) => {
    const {title, author_name, cover_img, reading_time, author_img, posted_date, hashtags}= blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='h-[450px] w-full mb-8 rounded-xl' src={cover_img} alt={`Cover picture of ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex gap-6'>
                    <img className='w-[60px] h-[60px] rounded-[60px]' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author_name}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=> handleAddToBookmark(blog)} 
                    className='ml-2 text-red-400
                    '><IoBookmark /></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>{hashtags.map((hashtag, idx) => <span className='mr-2' key={idx}><a href=''>{hashtag}</a></span>)}</p>
            <button
            onClick={()=>handleReadingTime(reading_time)}
             className='text-blue-400 font-bold underline'>Mark as Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleReadingTime: PropTypes.func
}

export default Blog;