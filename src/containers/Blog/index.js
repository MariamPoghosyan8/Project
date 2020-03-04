import React from 'react';
import { Paper,Text, BlogCard,Pagination } from 'components';
import classnames from 'classnames';
import sec from '../../assets/Blog photos/section.png';
import blogimg from '../../assets/Blog photos/blogphoto1.png';
import blogimg1 from '../../assets/Blog photos/blogphoto2.png';
import blogimg2 from '../../assets/Blog photos/blogphoto3.png';
import './style.scss';

const Blog = () => {
    const blogItems=[
        {
            img: blogimg,
            title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            button:'read more'
        },{
            img:blogimg1,
            title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            button:'read more'
        },{
            img:blogimg2,
            title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            button:'read more'
        },
    ]
    return (
        <Paper className={classnames("Blog")}>
            <Paper className='page-content'>
                <Paper className='imageContent' style={{backgroundImage: `url(${sec})`}} flexName='flexible aEnd'>
                    <Paper className='textContent' flexName='flexible vertical'>
                        <Text className='extraLarge blogTitle'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
                        <Text className='large blogDesc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                    </Paper>
                </Paper>
    
                     {
                        blogItems.map((item,index)=>(
                            <BlogCard
                                title={item.title}
                                description={item.description}
                                button={item.button}
                                src={item.img}
                            />
                        ))
                    }
    

            <section>
                 <Pagination count='100' onPageChange={console.log}/>
            </section>
                <Paper className='popularItems'>
                    <Text className='doubleExtraLarge'>Most popular</Text>
                    <Paper flexName='flexible' className='items'>
                        {
                            blogItems.map((item,index)=>(
                                <BlogCard
                                    src={item.img}
                                />
                            ))
                        }
                </Paper>
                </Paper>
            </Paper>
        </Paper>
    );
};

export default Blog;