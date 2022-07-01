import React from 'react';
import Blogs from '../components/Blogs';
import '../style/blog.css';

function Blog({ blogs }) {
    return (
        <>
            <h1 className='BlogTitle'>Blog</h1>
            <div className='blogList-wrap'>
                <div className="boc"></div>
                <div className="boc"></div>
                <div className="boc"></div>
                <div className="boc"></div>
                <div className="boc"></div>
                <div className="boc"></div>
                <div className="boc"></div>
                <div className="boc"></div>
                <div className="boc"></div>
            </div>
        </>
    );
}

export default Blog;