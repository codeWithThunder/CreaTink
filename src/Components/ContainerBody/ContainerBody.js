import React from 'react';
import logo from '../image/photo.png';
import './ContainerBody.css';

const ContainerBody = () => {
    return (
        <section class="text-gray-600 body-font" id='imgContainerBody'>
            <div class="container mx-auto flex px-[5.25rem] py-[2rem] md:flex-row flex-col items-center item-center">
                <div class="lg:flex-grow flex flex-col md:items-center justify-center md:text-center text-center mt-[95px]">
                <h1 class="title-font sm:text-[1.8rem] text-[1.8rem] mb-4 font-medium text-white">Hello, I'm</h1>
                    <h1 class="title-font sm:text-[5.25rem] text-[5.25rem] mb-4 font-medium text-white">Peter Parker</h1>
                    <p class="mb-8 leading-relaxed text-white">A Photographer From New York</p>
                    <div class="flex justify-center">
                        <button class="inline-flex text-white bg-[#ff0099ed] border-0 py-2 px-6 focus:outline-none hover:text-black hover:bg-gray-100 rounded text-lg">Book A Shoot</button>
                        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:text-white hover:bg-[#ff0099ed] rounded text-lg">View Plans</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContainerBody;