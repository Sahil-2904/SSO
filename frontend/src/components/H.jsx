function H(){
    return (
        <>
            <div className="flex flex-col justify-center min-h-screen ">
                <div class="text-center">
                    <h1 class="text-3xl font-semibold  lg:text-4xl">To start making <span class="text-blue-400">Notes</span></h1>
                    <a href="/signin"><button class="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Sign In</button></a>
                </div>
            </div>
        </>
    )
}

export default H;