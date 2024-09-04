export default function Header(){
    return (
        <>
        <header className="w-full h-screen bg-bgHeader bg-no-repeat flex text-white ">
            <div className="pl-16 w-1/2 md:w-[40%] mt-32">
                <h1 className=" text-3xl md:text-7xl">Lorem Ipsum</h1>
                <p className="mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores sint saepe atque perspiciatis sit dolore at fugit pariatur, vero.</p>
                <button className="mt-10 bg-yellow-400 px-10 py-2 text-black font-semibold text-lg">MORE</button>
            </div>
            
        </header>
        </>
    )
}