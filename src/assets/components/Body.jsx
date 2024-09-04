import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faUsers, faLocationDot, faLifeRing, faMapLocation, faFire, faSeedling, faBell, faBoxOpen, faBezierCurve, faShieldHalved, faCompass, faPersonHiking} from "@fortawesome/free-solid-svg-icons"
export default function Body(){

    return <>
    <section className=" items-center flex flex-col">
        <div className="w-2/4">
            <h2 className="text-center text-primary text-3xl font-bold">Lorem ipsum <br /> dolor sit</h2>
            <p className="text-center pt-2 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis natus tempore cupiditate non repudiandae corrupti quo corporis molestiae asperiores, magnam ullam facere delectus distinctio culpa suscipit enim dolor vel. Voluptatum?</p>
        </div>
        
        <div className="container md:flex mt-20">
        <div className="md:flex w-full lg:w-1/2">
        <div className="w-full md:w-1/2 flex justify-center">
                <div className="h-96 w-64 bg-bg1 bg-cover bg-no-repeat bg-center">
                      <FontAwesomeIcon icon={faUsers} className="mt-16 text-3xl ml-4 text-white" />
                      <div className=" border-b-4 border-yellow-400 mx-4">
                      <h3 className="text-3xl  mt-3 font-bold text-white">Lorem</h3>
                     </div>
                     <p className="mt-[100px] text-white text-sm mt mx-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore libero reiciendis obcaecati vitae atque est necessitatibus illo consectetur laborum accusantium?</p>
                </div>
            </div>
            <div className="w-full md:w-1/2 justify-center flex">
                <div className="h-96 w-64 bg-bg2 bg-cover bg-no-repeat bg-center">
                      <FontAwesomeIcon icon={faLocationDot} className="mt-16 text-3xl ml-4 text-white" />
                      <div className=" border-b-4 border-yellow-400 mx-4">
                      <h3 className="text-3xl  mt-3 font-bold text-white">Lorem</h3>
                     </div>
                     <p className="mt-[100px] text-white text-sm mt mx-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore libero reiciendis obcaecati vitae atque est necessitatibus illo consectetur laborum accusantium?</p>
                </div>
            </div>
        </div>

        <div className="w-full md:flex lg:w-1/2 justify-center">
        <div className="w-full md:w-1/2 flex justify-center">
                <div className="h-96 w-64 bg-bg3 bg-cover bg-no-repeat bg-center">
                      <FontAwesomeIcon icon={faLifeRing} className="mt-16 text-3xl ml-4 text-white" />
                      <div className=" border-b-4 border-yellow-400 mx-4">
                      <h3 className="text-3xl  mt-3 font-bold text-white">Lorem</h3>
                     </div>
                     <p className="mt-[100px] text-white text-sm mt mx-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore libero reiciendis obcaecati vitae atque est necessitatibus illo consectetur laborum accusantium?</p>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
                <div className="h-96 w-64 bg-bg4 bg-cover bg-no-repeat bg-center">
                      <FontAwesomeIcon icon={faMapLocation} className="mt-16 text-3xl ml-4 text-white" />
                      <div className=" border-b-4 border-yellow-400 mx-4">
                      <h3 className="text-3xl  mt-3 font-bold text-white">Lorem</h3>
                     </div>
                     <p className="mt-[100px] text-white text-sm mt mx-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore libero reiciendis obcaecati vitae atque est necessitatibus illo consectetur laborum accusantium?</p>
                </div>
            </div>
        </div>
          
            
    </div>
    </section>



    <section className="md:mt-32 mt-20 md:flex md:justify-between">
        <div className="w-full md:w-[37%] flex justify-center">
            <div className="w-3/4 md:w-full md:ml-20 border-[0.5px]
             py-5 px-3 rounded-3xl mb-5 shadow-2xl">
                 <h2 className="text-primary text-font text-3xl">Lorem Ipsum</h2>
                <p className="mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem blanditiis eligendi ratione explicabo nam sed vel. Placeat animi fuga deleniti ut molestias cum eum pariatur sed, officiis consequatur soluta incidunt?</p>
            </div>
        </div>
        <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-3/4 md:w-full pt-10 md:pt-5 md:mr-20">
                <div className="flex justify-between">
                    <FontAwesomeIcon icon={faFire} className="text-2xl text-red-600 border-[0.5px] p-5 rounded-2xl shadow-2xl"/>
                    <FontAwesomeIcon icon={faSeedling} className="text-2xl text-green-600 border-[0.5px] p-5 rounded-2xl  shadow-2xl"/>
                    <FontAwesomeIcon icon={faBell} className="text-2xl text-yellow-400 border-[0.5px] p-5 rounded-2xl shadow-2xl"/>
                    </div>
                <div className="flex justify-between mt-8">
                    <FontAwesomeIcon icon={faBoxOpen} className="text-lg border-[0.5px] p-5 rounded-2xl shadow-2xl text-blue-500 " />
                    <FontAwesomeIcon icon={faBezierCurve} className="text-lg border-[0.5px] p-5 rounded-2xl shadow-2xl text-gray-600" />
                    <FontAwesomeIcon icon={faShieldHalved} className="text-lg p-5 w border-[0.5px] rounded-2xl shadow-2xl text-gray-600" />
                </div>
            </div> 
        </div>
    </section>



    <section className="md:mt-32 mt-20">
        <div className="md:w-[37%] flex-col items-center md:items-start md:flex-row md:justify-between flex">
            <div className="md:w-1/2 w-3/4 md:mr-4 p-4 md:ml-20  border-[0.5px] shadow-2xl my-3 rounded-2xl">
                <FontAwesomeIcon icon={faLocationDot} className="text-primary text-2xl" />
                <h3 className="font-bold text-black text-3xl">12</h3>
                <p className="mt-3">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="md:w-1/2 w-3/4 my-3 h-full p-4 border-[0.5px] shadow-2xl rounded-2xl">
                <FontAwesomeIcon className="text-lg text-primary" icon={faCompass} />
                <h3 className="text-dark text-3xl font-bold">412</h3>
                <p className="mt-3">Lorem, ipsum dolor.</p>
            </div>
        </div>
        
        <div className="mt-5">
            <div className="md:w-[100%]  flex">
                <div className="w-1/4 md:ml-40 border-[0.5px] shadow-2xl p-3 pr-10 rounded-2xl">
                    <FontAwesomeIcon icon={faLocationDot} className="text-primary text-2xl" />
                    <h3 className="font-bold text-black text-3xl">12</h3>
                    <p className="mt-3">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className="md:w-1/4 border-[0.5px] shadow-2xl md:ml-3 rounded-2xl p-3 h-full">
                <FontAwesomeIcon className="text-lg text-primary" icon={faCompass} />
                <h3 className="text-dark text-3xl font-bold">412</h3>
                <p className="mt-3">Lorem, ipsum dolor.</p>

                </div>
            </div>
        </div>

        <div className="mt-20 w-full flex justify-end">
            <div className="w-1/4 border-[0.5px] shadow-lg mr-10 rounded-2xl p-3">
                    <FontAwesomeIcon icon={faLocationDot} className="text-primary text-2xl" />
                    <h3 className="font-bold text-black text-3xl">12</h3>
                    <p className="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="w-1/4 border-[0.5px] shadow-lg mr-10 rounded-2xl p-3 h-full">
                <FontAwesomeIcon className="text-lg text-primary" icon={faCompass} />
                <h3 className="text-dark text-3xl font-bold">412</h3>
                <p className="mt-3">Lorem, ipsum dolor.</p>
            </div>

            
        </div>
        
        <div className="mt-5 w-full flex justify-end">
            <div className="w-1/4 border-[0.5px] shadow-lg mr-10 rounded-2xl p-3">
                <FontAwesomeIcon icon={faPersonHiking} className="text-primary text-2xl" />
                <h3 className="font-bold text-black text-3xl">12</h3>
                <p className="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="w-1/4 border-[0.5px] shadow-lg md:mr-40 rounded-2xl p-3 h-full">
                <FontAwesomeIcon className="text-lg text-primary" icon={faCompass} />
                <h3 className="text-dark text-3xl font-bold">412</h3>
                <p className="mt-3">Lorem, ipsum dolor.</p>
            </div>

        </div>
    </section>

    <section className="mt-20 md:mt-32">
        {/* PRIMA IMMAGINE CON DESCRIZIONE */}
        <div className="container md:flex">
            <div className="w-full md:w-1/2 flex justify-center">
                <div className="w-[90%] shadow-lg border-[0.5px] rounded-3xl p-4">
                    <h3 className="font-semibold text-primary text-2xl">Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus id veritatis mollitia, nam quibusdam eveniet quas, quis rerum esse obcaecati doloremque corrupti pariatur ratione magni sed distinctio molestiae veniam? Illo autem architecto reprehenderit harum at?</p>
                </div>
            </div>

            {/* immagine */}
            <div className="w-full md:w-1/2 flex justify-center ">
                <div className="border-4 border-primary rounded-full p-2">
                    <img src="https://picsum.photos/200" alt="" className="rounded-full h-42 w-42" />

                </div>
            </div>
        </div>
        {/* FINE PRIMA IMMAGINE CON DESCRIZIONE */}
        {/* INIZIO SECONDA IMMAGINE CON DESCRIZIONE */}
        <div className="container md:flex pt-20 ">
            {/* immagine  */}
            <div className="w-full md:w-1/2 flex justify-center">
                <div className="border-4 border-primary rounded-full p-2">
                    <img src="https://picsum.photos/200" alt="" className="rounded-full h-42 w-42" />

                </div>
            </div>
            {/* testo */}
            <div className="w-full md:w-1/2 flex justify-center">
                <div className="w-[90%] shadow-lg border-[0.5px] rounded-3xl p-4">
                    <h3 className="font-semibold text-primary text-2xl">Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus id veritatis mollitia, nam quibusdam eveniet quas, quis rerum esse obcaecati doloremque corrupti pariatur ratione magni sed distinctio molestiae veniam? Illo autem architecto reprehenderit harum at?</p>
                </div>
            </div>
        </div>
        {/* FINE SECONDA IMMAGINE CON DESCRIZIONE */}

    </section>

    <section className="pt-20 ">
        <h2 className="text-center text-3xl text-primary font-bold">Lorem ipsum <br /> dolor sit</h2>
        <div className="w-1/2 mt-10 md:p-5 border-r-4 border-primary relative after:content-[''] after:h-8 after:w-8 after:rounded-full after:border-primary after:border-2 after:absolute after:right-0 after:top-0 after:translate-y-[-100%]
        after:translate-x-[55%]">
            <h3 className="text-primary text-2xl font-semibold ">Lorem ipsum</h3>
            <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos tempore, iusto accusamus accusantium minima aliquid adipisci voluptatem exercitationem, sed tenetur pariatur quam excepturi dignissimos praesentium tempora esse eveniet perspiciatis itaque repudiandae? Eaque totam excepturi officiis magnam dolor sequi quod dicta.</p>
        </div>

        <div className="flex">
            <div className="w-1/2 mt-8 md:p-5 border-r-4 border-primary relative after:content-[''] after:h-8 after:w-8 after:rounded-full after:border-primary after:border-2 after:absolute after:right-0 after:top-0 after:translate-y-[-100%]
            after:translate-x-[55%]">
            </div>
            <div className="w-1/2 p-5">
            <h3 className="text-primary text-2xl font-semibold ">Lorem ipsum</h3>
            <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos tempore, iusto accusamus accusantium minima aliquid adipisci voluptatem exercitationem, sed tenetur pariatur quam excepturi dignissimos praesentium tempora esse eveniet perspiciatis itaque repudiandae? Eaque totam excepturi officiis magnam dolor sequi quod dicta.</p>

            </div>
        </div>

        <div className="w-1/2 mt-8 md:p-5 border-r-4 border-primary relative after:content-[''] after:h-8 after:w-8 after:rounded-full after:border-primary after:border-2 after:absolute after:right-0 after:top-0 after:translate-y-[-100%]
        after:translate-x-[55%]">
            <h3 className="text-primary text-2xl font-semibold ">Lorem ipsum</h3>
            <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos tempore, iusto accusamus accusantium minima aliquid adipisci voluptatem exercitationem, sed tenetur pariatur quam excepturi dignissimos praesentium tempora esse eveniet perspiciatis itaque repudiandae? Eaque totam excepturi officiis magnam dolor sequi quod dicta.</p>
        </div>

        <div className="flex">
            <div className="w-1/2 mt-8 md:p-5 border-r-4 border-primary relative after:content-[''] after:h-8 after:w-8 after:rounded-full after:border-primary after:border-2 after:absolute after:right-0 after:top-0 after:translate-y-[-100%]
            after:translate-x-[55%]">
            </div>
            <div className="w-1/2 p-5">
            <h3 className="text-primary text-2xl font-semibold ">Lorem ipsum</h3>
            <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos tempore, iusto accusamus accusantium minima aliquid adipisci voluptatem exercitationem, sed tenetur pariatur quam excepturi dignissimos praesentium tempora esse eveniet perspiciatis itaque repudiandae? Eaque totam excepturi officiis magnam dolor sequi quod dicta.</p>

            </div>
        </div>
        <div className="flex justify-center mt-5">
            <button className="bg-primary text-white px-10 py-2">Subscribe!</button>
        </div>
    </section>
    </>
}