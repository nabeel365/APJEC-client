import React from 'react';

const TopSlider = () => {
    return (
        <div>
            <div className="carousel w-full max-h-64 md:max-h-96">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://www.kidsartncraft.com/wp-content/uploads/2020/12/Lion-Craft-Ideas-For-Kids-and-Preschoolers.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-black bg-opacity-50 text-white text-center">
                        <h2 className="text-xl font-bold">Welcome to Craftopia Art School</h2>
                        <p className="text-sm">Unlock your creativity and explore the world of art and craft.</p>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://necessityestore.in/wp-content/uploads/2022/01/Picsart_22-01-02_13-04-33-347.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-black bg-opacity-50 text-white text-center">
                        <h2 className="text-xl font-bold">Join our Art Workshops</h2>
                        <p className="text-sm">Learn from experienced artists and enhance your artistic skills.</p>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://in2english.net/wp-content/uploads/2018/05/Visual-Arts.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-black bg-opacity-50 text-white text-center">
                        <h2 className="text-xl font-bold">Create Beautiful Masterpieces</h2>
                        <p className="text-sm">Unleash your imagination and bring your ideas to life.</p>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://www.simpleeverydaymom.com/wp-content/uploads/2022/03/handprint-craft-image-FB.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-black bg-opacity-50 text-white text-center">
                        <h2 className="text-xl font-bold">Art Classes for All Ages</h2>
                        <p className="text-sm">From kids to adults, we offer art classes tailored to different age groups and skill levels.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopSlider;
