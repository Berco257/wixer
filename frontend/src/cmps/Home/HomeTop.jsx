import React from 'react'
import { Logo } from '../Logo'
import Hero from '../../assets/images/home/hero.gif'

export const HomeTop = () => {

    return (
        <section className="home-top main-layout flex direction-column justify-center align-center">
            <h1>Create a website for your business</h1>
            <img src={Hero} />
            <div className="txt">
                <Logo />
                {" "} is an easy-to-use platform, to build your website easily and quickly.
            </div>
            <a className="btn" href="#templates">Start Build Now!</a>
        </section>
    )
}