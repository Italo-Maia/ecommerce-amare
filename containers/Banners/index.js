//Criando Slides com Class

import React, { Component } from 'react';

import styles from '../../styles/Main.module.css';

const IMAGES = [
    "/banners/banner1.png",
    "/banners/banner2.png",
    "/banners/banner3.png"
]


class Banners extends Component {
    state = {
        img: IMAGES[0],
        idx: 0
    }

    onChange = (index) => {
        let option = (index < 0) ? IMAGES.length - 1 : ( index >= IMAGES.length ) ? 0 : index;
        this.setState({ img: IMAGES[option], idx: option})
    }

    componentDidMount(){
        this.scroll = window.setInterval(() => this.onChange(this.state.idx + 1), 5000);
    }

    componentWillUnmount(){
        window.clearInterval(this.scroll)
    }

    renderBanners() {
        const { img } = this.state;
        return (
            <div className={ `${styles["flex-1"]} ${styles.banner}`}>
                <img src={img} className={styles.banner}  />
            </div>
        )
    }

    render() {
        return (
            <div className={`${styles.Banners} `} >
                {this.renderBanners()}
            </div>
        )

    }
}

export default Banners;