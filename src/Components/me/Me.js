import css from './Me.module.scss';
import moi from "../../ressources/image/breval_halo.jpg";


function Me() {
    return (

        <section>


            <div className={css.content}>


                <div className={css.text}>
                    <h2 className={css.title}>A propos de moi...</h2>
                    <p className={css.desc}>
                        Je m’appelle Breval Le Floch, j’ai 20 ans, je suis sur la voie pour devenir développeur
                        Freelance, et je suis étudiant à l’EPSI Nantes Nantes en deuxième année.
                        <br/>
                        Je suis passionné par l'informatique depuis les études préparatoires et j'aime envisager le
                        monde qui m'entoure
                        sous différents angles. L'informatique me permet d'explorer tout un nouveau monde régis par ces
                        propres règles logiques. Un monde qui permet à n'importe qui a l'aide d’un simple clavier
                        d'imaginer et construire n'importe quoi.
                        <br/>
                        J'aimes faire des projets professionnels afin d’approfondir mes connaissances et de tester
                        toujours plus de technologie.
                    </p>

                </div>

                <div className={css.rightPanel}>


                    <img src={moi} alt="dessin du portrait de Bréval Le Floch" className={css.avatar}/>

                    <button className={css.button}>
                        Télécharger mon CV
                    </button>


                </div>
            </div>


        </section>


    );
}

export default Me;
