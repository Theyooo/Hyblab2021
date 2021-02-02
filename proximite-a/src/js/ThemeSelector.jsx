import React from 'react';
import logo from '../img/LOGO OK_logo principal.png'
import fetard_img from '../img/Perso-hyblab-03.png'
import sportif_img from '../img/Perso-hyblab-02.png'
import gourmet_img from '../img/Perso-hyblab-04.png'
import curieux_img from '../img/Perso-hyblab-05.png'
import famille_img from '../img/Perso-hyblab-06.png'
import '../css/theme.css'
import equivalent from './equivalent.js'
import fetard_gif from '../img/Perso-animation fêtard.gif'
import sportif_gif from '../img/Perso-animation sportif.gif'
import gourmet_gif from '../img/Perso-animation 2.gif'
import curieux_gif from '../img/Perso-animation culturel.gif'
import famille_gif from '../img/Perso-animation 2_2.gif'
class ThemeSelector extends React.Component {
    render() {
        const { onNextPage, onPreviousPage } = this.props;
        return (
            <div id="themeSelector" class="bg-white d-flex justify-content-center align-items-center flex-column">
                <h3>Tu te sens plutôt .. ?</h3>
                <div class="container">
                    <div class="row selection">
                        <div class="col">
                            <input type="radio" name="theme" id="fetard" class="input-hidden" onClick={() => { this.props.updateSelect(1)}}/>
                            <label htmlFor="fetard">
                                <img src={fetard_img} alt="fetard" class="img_bas" onMouseEnter={e => e.target.src = fetard_gif} onMouseLeave={e => e.target.src = fetard_img}/>
                            </label>
                        </div>

                        <div class="col">
                            <input type="radio" name="theme" id="sportif" class="input-hidden" onClick={() => { this.props.updateSelect(2) }}/>
                            <label htmlFor="sportif">
                                <img src={sportif_img} alt="sportif" class="img_hte" onMouseEnter={e => e.target.src = sportif_gif} onMouseLeave={e => e.target.src = sportif_img}/>
                            </label>
                        </div>

                        <div class="col">
                            <input type="radio" name="theme" id="gourmet" class="input-hidden"  onClick={() => { this.props.updateSelect(3) }}/>
                            <label htmlFor="gourmet">
                                <img src={gourmet_img} alt="gourmet" class="img_bas" onMouseEnter={e => e.target.src = gourmet_gif} onMouseLeave={e => e.target.src = gourmet_img}/>
                            </label>
                        </div>

                        <div class="col">
                            <input type="radio" name="theme" id="curieux" class="input-hidden" onClick={() => { this.props.updateSelect(4) }}/>
                            <label htmlFor="curieux">
                                <img src={curieux_img} alt="curieux" class="img_hte" onMouseEnter={e => e.target.src = curieux_gif} onMouseLeave={e => e.target.src = curieux_img}/>
                            </label>
                        </div>

                        <div class="col">
                            <input type="radio" name="theme" id="famille" class="input-hidden" onClick={() => { this.props.updateSelect(5) }}/>
                            <label htmlFor="famille">
                                <img src={famille_img} alt="famille" class="img_bas" onMouseEnter={e => e.target.src = famille_gif} onMouseLeave={e => e.target.src = famille_img}/>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ThemeSelector;
