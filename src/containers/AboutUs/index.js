import React from 'react';
import './style.scss';
import { Paper, Image, Text } from 'components';
import classnames from 'classnames';
import main from '../../assets/Abou US/main.png'

const AboutUs = () => {
    return (
        <Paper className={classnames("AboutUs")}>
            <Paper className='page-content'>
                <Paper className='content' flexName='flexible'>
                    <Paper className='textContent'>
                        <Paper className='size' flexName='flexible vertical'>
                            <Text className='doubleExtraLarge'> About us </Text>
                            <Text className='large'> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                            <Text className='large'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                        </Paper>
                    </Paper>
                    <Paper className='imgContent' flexName='flexible aCenter jCenter'> 
                        <Image
                            src={main}
                            width='100%'
                            height='auto'
                        />
                    </Paper>
                </Paper>
            </Paper>
        </Paper>
    );
};
export default AboutUs;