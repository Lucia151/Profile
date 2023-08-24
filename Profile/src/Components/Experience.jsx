import React from 'react'
import frontend from "../../src/assets/images/frontend.png";
import backend from "../../src/assets/images/backend.png"
import "../../src/index.css"

export default function Experience() {
  return (
    
    <div className="flex flex-col justify-center sm:py-12">
                    <div className="w-full py-3 sm:max-w-xl sm:mx-auto sm:px-0">
                        <div className="relative text-gray-700 antialiased text-sm font-semibold">
                        {/* ========== vertical line running through the middle ========== */}
                        <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>

                        {/* ========== left card ========== */}
                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex items-center flex-col sm:flex-row">

                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                        <div data-aos="fade-right" data-aos-duration="1200" className="bg-white dark:bg-black hover:dark:bg-primaryColor p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className="text-primaryColor font-[700] mb-2 mt-1 group-hover:text-white dark:group-hover:text-black group-hover:font-[600] text-xl text-center">Frontend Development</h3>

                                            <p className="text-[15px] text-smallTextColor dark:text-white group-hover:text-white dark:group-hover:text-white group-hover:font-[500] leading-7 text-center">
                                            Using modern HTML, CSS, and JavaScript frameworks, I can transform your design concepts into interactive and intuitive interfaces that captivate users and enhance their interaction with your digital products.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                    <figure>
                                        <img src={frontend} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                        
                        {/* ========== right card ========== */}
                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex items-center flex-col sm:flex-row">

                                <div className="flex justify-end w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pl-8">
                                        <div data-aos="fade-left" dat-aos-duration="1300" data-aos-delay="50" className="bg-white dark:bg-black hover:dark:bg-primaryColor p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className="text-primaryColor dark:text-primaryColor font-[700] mb-2 mt-1 group-hover:text-white dark:group-hover:text-black group-hover:font-[600] text-xl text-center"
                                            >
                                                Backend Development
                                            </h3>

                                            <p className="text-[15px] text-smallTextColor dark:text-white group-hover:text-white group-hover:font-[500] leading-7 text-center">
                                            With expertise in server-side programming languages, databases, and frameworks, I can build robust back-end systems to power your software applications and websites.  
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                    <figure>
                                        <img src={backend} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>

                        {/* ========== left card ========== */}
                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex items-center flex-col sm:flex-row">

                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                        <div data-aos="fade-right" dat-aos-duration="1400" data-aos-delay="100" className="bg-white dark:bg-black p-4 rounded shadow group hover:bg-primaryColor dark:hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className="text-primaryColor font-[700] mb-2 mt-1 group-hover:text-white dark:group-hover:text-black group-hover:font-[600] text-xl text-center">App Development</h3>

                                            <p className="text-[15px] text-smallTextColor dark:text-white group-hover:text-white group-hover:font-[500] leading-7 text-center">
                                            Based on your requirements, I can provide valuable insights and consulting to refine your app concept, identify key features, and determine the optimal technology stack and platform for development.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                    <figure>
                                        <img src="" alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>

                        </div>
                    </div>
                </div>
  )
}
