
import "./video.css"
const Video = ()=>{
    const conteudo =(

        <div className="container border-hidden shadow-[0px_-1px_0px_0px_rgba(0,0,0,0.1)] shadow-zinc-400 m-1 pb-2">
        <div className="video ">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/piQT3aKXg-k?si=pkjsPme-5BRpvVcK" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        </div>
    )
    return conteudo
}

export default Video


//