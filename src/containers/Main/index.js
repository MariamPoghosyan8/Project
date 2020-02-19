import React from 'react';
import {
    Paper,
    Text,
    Button,
    Image
} from "../../components";
import classnames from 'classnames';
import  img from '../../assets/Main photos/main.png'
import  './style.scss';


const Main = () => {
    return(
       <>
            <section>
                <Paper  className={classnames("Main")}>
                    <Paper className='page-content '>
                        <Paper flexName='flexible jCenter'>
                            <Paper className='titleTextBlock' flexName='flexible vertical'>
                                <Text className='extraLarge titleText'> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
                                <Button className='titleButton' bgColor='blue'>Read More</Button>
                            </Paper>

                        </Paper>
                    </Paper>
                </Paper>
            </section>
        </>
    )
};

export  default  Main;
