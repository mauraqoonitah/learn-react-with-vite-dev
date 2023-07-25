import { useState } from 'react'
import avatar from '../assets/profpic.jpg'

export default function Header(){
    const [count, setCount] = useState(0)


    return (
        <>
            <div>
                <img src={avatar} className="logo rounded-circle" alt="Profile Picture" />
            </div>
            <h1 className="home__title">Maura Qoonitah Putri </h1>
            <p className="home__profession fw-bold">Web Developer | Bachelor of Computer Science</p>
            
            <div className="home__social">
              <a href="https://www.linkedin.com/in/maura-qoonitah-putri/" target="_blank" className="home__social-link"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://github.com/mauraqoonitah" target="_blank" className="home__social-link" ><i className="fab fa-github"></i></a>
              <a href="mailto:mauraqoonitah@gmail.com" target="_blank" className="home__social-link" ><i className="far fa-envelope"></i></a>
            </div>
            <div>
                <a href="https://drive.google.com/file/d/1eAjb6j_Zj_2IU3yBT5ciZCDbzECETO5t/view?usp=sharing" target="_blank" className="button home__button">Download CV</a>
            </div>
            <div className='card mt-5'>
                <button onClick={() => setCount((count) => count + 1)}>Like me {count}x</button>
            </div>
        </>
    )
}
