"use client"
import React from 'react'
import style from './client.module.css'

import AnimatedText from '../utility/animatedText'
import RandomeColor from '../rendomColor/randomColor'


const clientPage = () => {
    const text = "Clients"
    const animatedText = text.split('');

    const clientDetail = [
        {
            img:"./imgs/pic01.png",
            name:"Rector",
            subTitle:"Ads Marketing",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora officiis, ea est deserunt suscipit porro asperiores explicabo, voluptatum pariatur beatae harum iste modi at eligendi expedita non exercitationem dolore consectetur.",
            handel:"intagram"
        },
        {
            img:"./imgs/pic02.png",
            name:"Rector",
            subTitle:"Ads Marketing",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora officiis, ea est deserunt suscipit porro asperiores explicabo, voluptatum pariatur beatae harum iste modi at eligendi expedita non exercitationem dolore consectetur.",
            handel:"intagram"
        }
    ]

  return (
    <>
    <div className={style.containers}>
       <div className={style.titles}>
       <RandomeColor content={<AnimatedText text="Client" tags="heading"/>}/>
        <RandomeColor content={<AnimatedText text="I am happy to see you here" tags="subHeading"/>}/>
       </div>
       <div className={style.clientContainer}>
       {clientDetail.map((item, index) => (
            <div className={style.clientBox} key={index}>
            <div className={style.clientImg}>
                <img src={item.img} alt="client profile pic" />
            </div>
            <div className={style.clientInfo}>
                <h3>
                    {item.name}
                </h3>
                <h4>
                    {item.subTitle}
                </h4>
                <p className={style.clientPara}>
                    {item.description}
                </p>
                <span>
                    {item.handel}
                </span>
            </div>
        </div>
        ))}
       </div>
    </div>
    </>
  )
}

export default clientPage