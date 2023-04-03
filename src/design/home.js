import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Front } from './front';
import { Second } from './second';
import { Third } from './third';
import { Fourth } from './fourth';
import { Fifth } from './fifth';
import { Sixthbuss } from './sixthbuss';
import { Seventh } from './seventh';
import { Eigth } from './eighth';


export function Home()
{
    return(
        <>
        <Front/>
          <Second/>
        <Third/>
        <Fourth/> 
        <Fifth/>
        <Sixthbuss/>
        <Seventh/>
        <Eigth/>
        </>
    )
   

    ;
}