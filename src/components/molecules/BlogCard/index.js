import React from 'react';
import classnames from 'classnames';
import dayjs from 'dayjs';

import {
  Text,
  Paper,
  Image,
} from 'components';

import './style.scss'
import Button from 'components/atoms/Button';

const BlogCard = ({
  src,
  width,
  title,
  description,
  restProps,
  button
}) =>{


  return  (
    <Paper
      className={classnames("BlogCommentCard")}
      {...restProps}>
        <Paper flexName='flexible aCenter' className='item'>
            <Paper>
              <Image
              src={src}
              width={width}
              height='auto'
              />
            </Paper>
            <Paper flexName='flexible vertical' className='desc'>
               <Text className='extraLarge title'>{title}</Text>
               <Text className='large description'>{description}</Text>
               <Paper flexName='flexible jEnd' className='button'>
                {button && <Button size='small' bgColor='blue'>{button}</Button>}
               </Paper>
            </Paper>
        </Paper>
    </Paper>
  )
};

export default BlogCard;
