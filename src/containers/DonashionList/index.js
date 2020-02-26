import React from 'react';
import classnames from 'classnames';
import {Paper, InfoCard,List,Text, Pagination} from 'components';
import main from '../../assets/Donashian List/main.png';
import donimage from 'assets/Donashian List/radius.png'
import './style.scss';

const DonashionList = () => {
    const listItems=[
        {
            img: donimage,
            title:'Lungelo Ngcaba',
            place: 'Gothenburg'
        }, {
            img: donimage,
            title:'Lungelo Ngcaba',
            place: 'Gothenburg'
        }, {
            img: donimage,
            title:'Lungelo Ngcaba',
            place: 'Gothenburg'
        }, {
            img: donimage,
            title:'Lungelo Ngcaba',
            place: 'Gothenburg'
        }, {
            img: donimage,
            title:'Lungelo Ngcaba',
            place: 'Gothenburg'
        }, {
            img: donimage,
            title:'Lungelo Ngcaba',
            place: 'Gothenburg'
        },
    ]
    return(
        <Paper className={classnames("DonashionList")}>
            <Paper className='page-content'>
                <Paper>
                    <InfoCard
                        img={main}
                        title='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                        text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    />  
                </Paper>
                <Paper flexName='flexible jCenter'>
                  <Text className='doubleExtraLarge donators'>our donators</Text>
                </Paper>
                <Paper className='listBlock' flexName='flexible wrap jCenter '>
                    {
                        listItems.map((item,index)=>(
                            <List
                                src={item.img}
                                title={item.title}
                                place={item.place}
                            />
                        ))
                    }
                </Paper>
                <section>
                     <Pagination count='100' onPageChange={console.log}/>
                </section>  
            </Paper>
        </Paper>
    );
};

export default DonashionList