
import Link from "next/link"
import Image from "next/image"
import "./Header.css"

const Header = () => {
    let Foundadmin: string
    // let isAdmin:boolean = true 
    // const checkForAdmin=(isAdmin:boolean):void=>{
    //     if(!isAdmin){
    //         Foundadmin = styles.admin
    //     }else{
    //         Foundadmin = styles.hidden
    //     }
    // }
    const content = (
        <div>
            <header className="navbar">
                <div className="container">
                    <div className="logo">
                        <Link href="/">
                            <Image
                                src="/images/logo.png"
                                alt="Logo Domus Petra"
                                width={220}
                                height={41}
                            />
                        </Link>
                    </div>
                    
                    <div className="main-menu">
                    <ul>
                        <li>
                        <a href="/about">about</a>
                        </li>
                        <li>
                        <a href="/blog">blog</a>
                        </li>
                        <li>
                        <a href="/contact">contact</a>
                        </li>
                        <li>
                        <a href="/landing">landing</a>
                        </li>
                        <li>    
                        <a href="/speechs">speechs</a>
                        </li>
                        <li>
                        <a href="/training">training</a>
                        </li>
                        <li>
                        <a className="admin" href="/dashboard" >Administração</a>
                        </li>
                        <li>
                        <a className="admin" href="/dashboard/blog" >Administraçãodeblog</a>
                        </li>
                        <li>
                        <a className="admin" href="/dashboard/users" >Administração usuarios</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </header>
        </div>
    )
    return content
}

export default Header