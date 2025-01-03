
const Hero = () => {
  return (
    <section className="bg-gray-100 p-16 ">
        <div className="w-full h-screen grid grid-rows-[80%_18%] bg-gray-100 gap-8 mx-auto container ">
        <div className="w-full h-full grid grid-cols-4 gap-4">
            <div className="col-span-3 flex bg-blue-500 rounded-xl "></div>
            <div className="col-span-1 h-full flex flex-col justify-center items-start gap-8">
                <div className="hero-product bg-orange-400 w-full h-full rounded-xl">1</div>
                <div className="hero-product bg-orange-400 w-full h-full rounded-xl">2</div>
            </div>
                
        </div>
        <div className="promotion h-full bg-blue-100">
                here
        </div>
        </div>
    </section>
  )
}

export default Hero
