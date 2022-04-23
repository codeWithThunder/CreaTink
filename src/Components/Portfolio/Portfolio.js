import React, { Component } from "react";
import coverImg from './img/ssss.png';

export class Portfolio extends Component {
  render() {
    return (
      <div>
        <section class="text-white body-font">
          <div class="container px-5 py-24 pb-[5rem] mx-auto">
            <div class="flex flex-col text-center w-full">
              <h1 class="text-[1.20rem] font-medium title-font mb-4 text-[#ff0099ed]">
                Portfolio
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed mb-10 text-[1.80rem]">
                Check Out Some Of My
                <br />
                Amazing Clicks
              </p>
            <img src={coverImg} className="w-[100%] h-[100vh] " alt="" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Portfolio;
