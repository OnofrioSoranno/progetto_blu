import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faUsers, faLocationDot, faLifeRing, faMapLocation} from "@fortawesome/free-solid-svg-icons"
export default function Cards(){

    return <>
    <section className=" items-center flex flex-col">
        <div className="w-2/4">
            <h2 className="text-center text-primary text-3xl font-bold">Lorem ipsum <br /> dolor sit</h2>
            <p className="text-center pt-2 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis natus tempore cupiditate non repudiandae corrupti quo corporis molestiae asperiores, magnam ullam facere delectus distinctio culpa suscipit enim dolor vel. Voluptatum?</p>
        </div>
        
        <div className="container md:flex my-20">
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
    </>
}