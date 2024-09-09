import React from 'react'
import Shared_Hosting_Image from './Images/Shared'
import Vps_Hosting_Image from './Images/Vps'
import Ml_Hosting_Image from './Images/Ml'

const Services = () => {
return(
   <div class="flex mx-auto justify-center items-center" >
    

    <div class="grid grid-cols-1 xl:grid-cols-3 gap-6 m-8 mt-10">

    <div class="grid col-span-3 text-center mb-10 lg:mb-14" id='services'>
        <h2 class="text-2xl font-bold md:text-4xl md:leading-tight">Our Services</h2>
    </div>
    
        <div class="flex flex-col  w-full xl:w-96 bg-[#c0c5ce] bg-opacity-10 shadow-2xl text-[#343d46]">
            <figure class="flex justify-center items-center">
                <Shared_Hosting_Image />
            </figure>
            <div class="flex flex-col p-8 h-full">
                <div class="text-2xl text-center  pb-6">Basic Hosting</div>
                <div class=" text-center text-base pb-12">Monthly or Yearly hosting with/out CPanel, WHM, Coolify or your choice of UI</div>
                <div class="flex flex-col gap-3  text-sm">

                    <div class="flex flex-row gap-3">
                        <div class="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                        </div>
                        <div class="font-bold">Shared Hosting</div>
                    </div>

                    <div class="flex flex-row gap-3">
                        <div class="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                        </div>
                        <div>Domain Name</div>
                    </div>

                    <div class="flex flex-row gap-3">
                        <div class="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                        </div>
                        <div>100GB Ultra Fast SSD Storage</div>
                    </div>

                    <div class="flex flex-row gap-3">
                        <div class="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                        </div>
                        <div>Unlimited Transfer</div>
                    </div>
                    
                    <div class="flex flex-row gap-3">
                        <div class="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                        </div>
                        <div>Unlimited Email Accounts</div>
                    </div>
                    
                    <div class="flex flex-row gap-3">
                        <div class="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                        </div>
                        <div>Worpress Optimized</div>
                    </div>
                    
                    <div class="flex flex-row gap-3">
                        <div class="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                        </div>
                        <div>CPanel Control Panel</div>
                    </div>


                </div>
                <div class="flex flex-grow"></div>
                <div class="flex pt-10">
                    <button class="w-full bg-zinc-700 bg-opacity-15 text-[#343d46]  text-xl p-3 rounded-lg hover:bg-[#3f3f46] hover:text-white active:scale-95 transition-transform transform">Get Quote</button>
                </div>
            </div>
        </div>

        <div class="flex flex-col  w-full xl:w-96 bg-[#c0c5ce] bg-opacity-10 shadow-2xl text-[#343d46]">
            <figure class="flex justify-center items-center">
                <Vps_Hosting_Image />
            </figure>
            <div class="flex flex-col p-8 h-full">
                <div class="text-2xl text-center  pb-6">VPS Hosting</div>
                <div class=" text-center text-base pb-12">Looking for something a bit more customized and private? we got you...</div>
                <div class="flex flex-col gap-3  text-sm">
                    <div class="flex flex-row gap-3">
                        <div class="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                        </div>
                        <div class="font-bold">All features of the basic plan</div>
                    </div>
                    <div class="flex flex-row gap-3">
                        <div class="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                        </div>
                        <div>Increased Storage</div>
                    </div>
                    <div class="flex flex-row gap-3">
                        <div class="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                        </div>
                        <div>Advanced Analytics</div>
                    </div>
                    <div class="flex flex-row gap-3">
                        <div class="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                        </div>
                        <div>Reporting Tools</div>
                    </div>
                    <div class="flex flex-row gap-3">
                        <div class="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                        </div>
                        <div>Third-Party Integrations</div>
                    </div>
                    <div class="flex flex-row gap-3">
                        <div class="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                        </div>
                        <div>E-Mail Support</div>
                    </div>
                </div>
                <div class="flex flex-grow"></div>
                <div class="flex pt-10">
                    <button class="w-full bg-zinc-700 bg-opacity-15 text-[#343d46]  text-xl p-3 rounded-lg hover:bg-[#3f3f46] hover:text-white active:scale-95 transition-transform transform">Get Quote</button>
                </div>
            </div>
        </div>

        <div class="flex flex-col  w-full xl:w-96 bg-[#c0c5ce] bg-opacity-10 shadow-2xl  text-[#343d46]">
            <figure class="flex justify-center items-center">
                <Ml_Hosting_Image />
            </figure>
            <div class="flex flex-col p-8 h-full">
                <div class="text-2xl text-center  pb-6">Machine Learning Workloads</div>
                <div class=" text-center text-base pb-12">Exclusive features and priority support for businesses working on ML, AI and DL</div>
                <div class="flex flex-col gap-3  text-sm">
                    <div class="flex flex-row gap-3">
                        <div class="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                        </div>
                        <div class="font-bold">All features of the Pro plan</div>
                    </div>
                    <div class="flex flex-row gap-3">
                        <div class="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                        </div>
                        <div>Unlimited Storage</div>
                    </div>
                    <div class="flex flex-row gap-3">
                        <div class="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                        </div>
                        <div>End-to-End Encryption</div>
                    </div>
                    <div class="flex flex-row gap-3">
                        <div class="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                        </div>
                        <div>Predictive Insights</div>
                    </div>
                    <div class="flex flex-row gap-3">
                        <div class="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                        </div>
                        <div>Early-Access</div>
                    </div>
                    <div class="flex flex-row gap-3">
                        <div class="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                        </div>
                        <div>Dedicated Account Manager</div>
                    </div>
                    <div class="flex flex-row gap-3">
                        <div class="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                        </div>
                        <div>24/7 Dedicated Customer Support</div>
                    </div>
                </div>
                <div class="flex flex-grow"></div>
                <div class="flex pt-10">
                    <button class="w-full bg-zinc-700 bg-opacity-15 text-[#343d46]  text-xl p-3 rounded-lg hover:bg-[#3f3f46] hover:text-white active:scale-95 transition-transform transform">Get Quote</button>
                </div>
            </div>
        </div>
    </div>
</div>
)}

export default Services