import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faFacebookF, faInstagram, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import {} from "@fortawesome/free-solid-svg-icons"
export default function Footer_(){
    return <>
    <footer className="h-screen bg-bgFooter bg-cover, bg-no-repeat bg-center flex flex-col md:flex-row 
    justify-end md:justify-start items-end">
        <div className="w-full md:w-1/2 h-1/4">
            <h2 className="ml-10 text-yellow-500 text-3xl font-bold">Lorem ipsum dolor</h2>
            <p className="mt-3 ml-10 text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, reprehenderit! Totam facilis, odio sunt maxime expedita provident excepturi odit modi dolor id voluptatibus illum possimus vitae distinctio inventore facere nihil.</p>
        </div>
        <div className="w-full md:w-1/2 md:h-1/4 text-white mb-5 md:mb-0">
            <h2 className="text-yellow-500 text-3xl font-bold ml-10 md:ml-20">Social</h2>
            <div className="flex justify-between ml-10 md:ml-20 mt-10 items-center">
                <FontAwesomeIcon icon={faFacebookF} className="text-white text-2xl" />
                <FontAwesomeIcon className="text-white text-2xl" icon={faInstagram} />
                <FontAwesomeIcon className="text-white text-2xl" icon={faXTwitter} />
                <FontAwesomeIcon className="text-white text-2xl" icon={faLinkedin} />
                <div>
            </div>
             

            </div>
        </div>
    </footer>
    </>
}