import React from 'react';
import {Image, Paper} from "../../index";
import classnames from 'classnames';
import  './style.scss';


const VideoBlog = ({
       width,
       height,
       src,
       className,
       restProps

    }) =>{
    return(
        <Paper className={classnames("VideoBlog")}>
        <Paper className='bluefon' width={width} height={height}></Paper>
         <Image
            className={className}
            src={src}
            width={width}
            height={height}
            {...restProps}
         />
        </Paper>
    );
};
export  default  VideoBlog;
