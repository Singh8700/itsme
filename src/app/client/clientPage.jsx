"use client"
import React from 'react'
import style from './client.module.css'

import AnimatedText from '../utility/animatedText'
import RandomeColor from '../rendomColor/randomColor'
import Link from 'next/link'


const clientPage = () => {
    const text = "Clients"
    const animatedText = text.split('');

    const clientDetail = [
        {
            img:"./imgs/rtr.png",
            name:"Rector.world",
            subTitle:"Ads Marketing",
            description:"Executed a full-scale digital marketing campaign for Rector Token, leveraging social media ads, posters, and video content to boost engagement & conversions.",
            handel:"https://www.instagram.com/rectorcrypto/",
            stutas:"true"
        },
        {
            img:"./imgs/pic02.png",
            name:"Client",
            subTitle:"PC Hardware & Software",
            description:"Diagnosed and fixed PC faults for an institute client, resolving hardware & software issues, optimizing performance, and ensuring smooth system operation.",
            handel:"intagram",
            stutas:"false"
        }
    ]

  return (
    <>
    <div className={style.containers}>
       <div className={style.titles}>
       <RandomeColor content={<AnimatedText text="Client" tags="heading"/>}/>
        <RandomeColor content={<AnimatedText text="Building trust, one client at a time! 🤝✨" tags="subHeading"/>}/>
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
                <p>
                    {item.description}
                </p>
                {item.stutas === "true"?(
                    <span>
                    <Link href={`${item.handel}`}>
                        Instagram Profile
                    </Link>
                    </span>
                ):null}
            </div>
        </div>
        ))}
       </div>
    </div>
    </>
  )
}

export default clientPage