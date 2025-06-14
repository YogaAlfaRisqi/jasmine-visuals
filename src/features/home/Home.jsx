
export default function Home() {
  return (
     <>
      <main className="min-h-screen bg-white text-gray-800 px-4 md:pl-5 md:pr-20 py-0">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2">
          <div className="relative w-[400px] h-[400px] bg-pink-200 rounded-b-[160px] overflow-hidden mx-auto">
            <img
              src="public/Jasmine.jpg"
              alt="Aleena Edison"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="md:w-1/2 text-center md:text-left">
          <div className="md:flex justify-start mb-10 space-x-15 hidden md:text-lg text-gray-700">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#" className="hover:text-blue-600">Works</a>
            <a href="#" className="hover:text-blue-600">About</a>
            <a href="#" className="hover:text-blue-600">Contact</a>
            <span className="text-pink-500 font-bold text-lg ">A</span>
          </div>
          <p className="text-md text-blue-600 font-semibold">Jasmine Aulia</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-2">
            Fotografer Based in <span className="text-blue-800">Bandung</span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-md">
            To be a product designer is so amazing. I can help everyone build their businesses. It's such a happiness for me. So, let me help you!
          </p>
          {/* <Button className="mt-6 rounded-full px-6 py-3 text-white bg-blue-600 hover:bg-blue-700">
            My Story
          </Button> */}
        </div>
      </section>

    
      <section className="mt-20 mx-10 md:mx-20">
        <h2 className="text-3xl font-bold">
          My <span className="text-blue-800">Portofolio</span>
        </h2>
        <p className="text-gray-600 mt-2 max-w-xl">
          These are my design portfolio. You can check it by yourself. Some of my work have been live. As you can see, I work with different styles.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:mb-20">
          {/* Placeholder cards */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <img src="public/Jasmine.jpg" alt="Portfolio 1" className="w-full" />
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <img src="public/Jasmine.jpg" alt="Portfolio 2" className="w-full" />
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <img src="public/Jasmine.jpg" alt="Portfolio 3" className="w-full" />
          </div>
        </div>
      </section>
    </main>
     </>
  );
}