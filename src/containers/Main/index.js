import React, { useReducer } from 'react';
import {
    Paper,
    Text,
    Button,
    Image,
    VideoBlog,
    Icon,
    TextField,
    BlogCard
} from "../../components";
import classnames from 'classnames';
import  img from '../../assets/Main photos/main.png';
import img2 from  '../../assets/Main photos/Rectangle.png';
import img3 from '../../assets/Main photos/Rectangle Copy 6.png';
import wave from '../../assets/Main photos/shape.svg';
import img4 from 'assets/Main photos/girl.png'
import  './style.scss';


const Main = () => {
    const reducer = (state, action) => {
        switch(action.type){
            case 'PREW': return state - 1; 
            case 'NEXT': return state + 1;
            default: return state;
        }
    }

    const [testimonialsShowIndex, setTestimonialsShowIndex] = useReducer(reducer, 0);   

    const testimonialsData = [
        {
           img: img4,
           text: 'Lorem ipsum dolor sit amet consectur 1',
           name: 'Mariam Poghosyan' 
        },{
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9mfcKtDEOkLL9OodgakuMD4mJM2QqXMYMp_REXvQjRty-Q5t0',
            text: 'Lorem ipsum dolor sit amet consectur 2',
            name: 'Aziz Balayan' 
        },{
            img: 'https://cloudxlab.com/blog/wp-content/uploads/2017/12/learn-linux-1.png',
            text: 'Lorem ipsum dolor sit amet consectur 3',
            name: 'Valod Valodyan' 
        }
    ];

    return(
       <>
            <section>
                <Paper  className={classnames("Main")}>
                    <Paper className='page-content '>
                        <Paper flexName='flexible aCenter vertical'>
                            <Paper className='titleTextBlock' flexName='flexible vertical'>
                                <Text className='extraLarge titleText'> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
                                <Button className='titleButton' size='small' bgColor='blue'>Read More</Button>
                            </Paper>
                            <Paper flexName='flexible'>
                                <Image src={img} width='900px'height='auto' />
                            </Paper>
                        </Paper>
                    </Paper>
                    <Paper className='infoBlock' >
                        <Text className='doubleExtraLarge infoBlockTitle' >WHAT WE DO</Text>
                        <Paper flexName='flexible grow'>
                            <Paper className='leftBox'></Paper>
                            <Paper className='size'>
                                <Paper flexName='flexible'>
                                    <Paper className='blueBox'>
                                        <Paper className='textContainer' flexName='flexible vertical' >
                                            <Text className='extraLarge textContainerTitle'> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
                                            <Text className='large textContainerInfo'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cupiditate doloribus ducimus eos eveniet explicabo inventore, nesciunt odit perspiciatis porro, quis, ratione repellendus sunt suscipit voluptas! Earum incidunt natus possimus.</Text>
                                        </Paper>
                                    </Paper>
                                </Paper>
                                <Paper flexName='flexible jEnd' className='container'>
                                    <Paper className='whiteBox'>
                                        <Paper className='textContainer' flexName='flexible vertical'>
                                            <Text className='extraLarge textContainerTitle'> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
                                            <Text className='large textContainerInfo' > Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias at cumque dicta dolorum, ducimus est fuga harum ipsa, ipsam labore laudantium maxime nam necessitatibus obcaecati possimus quibusdam suscipit voluptate.</Text>
                                        </Paper>
                                    </Paper>
                                </Paper>
                            </Paper>
                            <Paper className='rightBox'></Paper>
                        </Paper>
                    </Paper>
                    <Paper className='videoBlock' >
                        <Paper flexName='flexible jCenter'>
                            <Text className='doubleExtraLarge videoBlockText'>WHAT WE DO</Text>
                        </Paper>

                        <Paper className='page-content' flexName='flexible'>
                            <VideoBlog width='528px' height='729px' src={img2}/>
                            <Paper flexName='flexible vertical'  className='videoBox'>
                                <VideoBlog className='videoItem' width='350px' height='350px' src={img3}/>
                                <VideoBlog className='videoItem2' width='350px' height='350px' src={img3}/>
                            </Paper>
                            <Paper flexName='flexible vertical' className='videoBox'>
                                <VideoBlog width='350px' height='350px' src={img3}/>
                                <VideoBlog className='videoItem3' width='350px' height='350px' src={img3}/>
                            </Paper>
                        </Paper>
                    </Paper>
                    <Paper className='waveBlock'>
                        <Paper flexName='flexible jCenter'>
                                <Text className='doubleExtraLarge waveBlockText'>WHAT WE DO</Text>
                        </Paper>
                        <Paper className='wave' style={{backgroundImage: `url(${wave})`}}>
                            <Paper className='page-content wavePage-content' flexName='flexible jCenter'>
                                <Paper flexName='flexible' className='leftSideContent'>
                                    <Paper className='leftside' flexName='flexible vertical'>
                                        <Text className='extraLarge waveBlockTitle'>Lorem ipsum</Text>
                                        <Text className='large'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                                    </Paper>
                                </Paper>
                                <Paper flexName='flexible aCenter'>
                                <Image 
                                src={img}
                                width='550px'
                                height='450px'
                                className='waveBlockImg'
                                />
                                </Paper>
                                <Paper className='rightSideContent'>
                                    <Paper className='rightside' flexName='flexible vertical'>
                                        <Text className='extraLarge waveBlockTitle'>Lorem ipsum</Text>
                                        <Text className='large'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                                    </Paper>
                                </Paper>
                            </Paper> 
                       </Paper>
                    </Paper>
                    <Paper className='SliderBlock' >
                        <Paper flexName='flexible grow'>
                            <Paper className='leftBox'></Paper>
                            <Paper className='size'>
                                <Paper flexName='flexible'>
                                    <Paper className='blueBox'>
                                        <Paper className='imgContainer' flexName='flexible vertical' >
                                            <Image 
                                            src={testimonialsData[testimonialsShowIndex].img}
                                            width='368px'
                                            height='350px' 
                                            className='sliderimg'
                                            />
                                        </Paper>
                                    </Paper>
                                </Paper>
                                <Paper flexName='flexible jEnd' className='container'>
                                    <Paper className='whiteBox'>
                                        <Paper className='insideContain'> 
                                            <Paper className='SlideContainer' >
                                                <Text>{testimonialsData[testimonialsShowIndex].text}</Text>
                                            </Paper>
                                            <Paper flexName='flexible jEnd' className='SliderTextTitle'>
                                                <Text>{testimonialsData[testimonialsShowIndex].name}</Text>
                                            </Paper>
                                            <Paper flexName='flexible jEnd'>
                                                <Paper className='leftArrow' flexName='flexible aCenter jCenter' onClick={() => setTestimonialsShowIndex({type: 'PREW'})}>
                                                    <Icon name='arrowLeft'/>
                                                </Paper>
                                                <Paper className='rightArrow' flexName='flexible aCenter jCenter' onClick={() => setTestimonialsShowIndex({type: 'NEXT'})}>
                                                    <Icon name='arrowRight'/>
                                                </Paper>
                                            </Paper>
                                        </Paper>
                                    
                                    </Paper>
                                </Paper>
                            </Paper>
                            <Paper className='rightBox'></Paper>
                        </Paper>
                    </Paper>
                    <Paper className='page-content' flexName='flexible'>
                        <Paper className='getInTouchBlock' flexName='flexible vertical'>
                            <Text className='doubleExtraLarge getInTouchBlockTitle'>Get in touch</Text>
                            <Text className='large getInTouchBlockText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                            <Paper className='textField'>
                            <TextField size='medium' withButton/>
                            </Paper>
                        </Paper>
                        <Paper className='imgBlock'>
                            <Image
                                src={img}
                                width='100%'
                                height='auto'
                            />
                        </Paper>
                    </Paper>
                </Paper>

            </section>
        </>
    )
};
export default Main;