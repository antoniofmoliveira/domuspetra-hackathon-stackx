
import "./video.css"
const Video = ()=>{
    const conteudo =(
        <div className="container">
        <div className="video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/piQT3aKXg-k?si=pkjsPme-5BRpvVcK" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        </div>
    )
    return conteudo
}

export default Video


//