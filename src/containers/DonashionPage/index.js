import React from 'react';
import classnames from 'classnames';
import { Paper ,Text, InfoCard,Button} from 'components';
import main from '../../assets/Donashian List/main.png';
import './style.scss';

const DonashionPage = () => {
    return(
        <Paper className={classnames("DonashionPage")}>
            <Paper className='page-content'>
                <Paper flexName='flexible jCenter'>
                    <Text className='doubleExtraLarge'> WHAT WE DO </Text>
                </Paper>
                <Paper>
                    <InfoCard
                        img={main}
                        title='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                        text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    />
                    <InfoCard
                        img={main}
                        title='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                        text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        reverse
                    />
                </Paper>
                <Paper flexName='flexible jCenter'>
                    <Paper className='donate' flexName='flexible aCenter vertical'>
                        <Paper className='donateText'>
                            <Text className='doubleExtraLarge title'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
                        </Paper>
                        <Paper className='donashionBut'>
                            <Button size='large' bgColor='orange'>Donate</Button>
                        </Paper>
                    </Paper>
                </Paper>
            </Paper>
        </Paper>
    );
};
export default DonashionPage;