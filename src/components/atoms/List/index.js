import React from 'react';
import classnames from 'classnames';
import { Paper, Image, Text, Icon } from 'components';
import './style.scss';

const List = ({
    src,
    title,
    place,
    width
}) => {
    return (
        <Paper className={classnames("List")} style={{ maxWidth: width }} flexName='flexible vertical aCenter'>
            <Paper className='radiusImage'>
                <Image
                    src={src}
                    width='200px'
                    height='auto'
                />
            </Paper>
            <Paper className='listContent'>
                <Paper flexName='flexible vertical jCenter  aCenter' className='textBlock'>
                    <Text className='extraLarge'>{title}</Text>
                    <Text className='large'>{place}</Text>
                </Paper>
                <Paper className='divaider'></Paper>
                <Paper className='shareBlog' flexName='flexible vertical aCenter'>
                    <Text>share width</Text>
                    <Paper flexName='flexible'>
                        <Paper className='icons'>
                            <Icon name='facebook' />
                        </Paper>
                        <Paper className='icons'>
                            <Icon name='instagram' />
                        </Paper>
                    </Paper>
                </Paper>
            </Paper>
        </Paper>
    );
};

List.defaultProps = {
    width: '360px'
};

export default List;