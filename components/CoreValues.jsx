import React from 'react'

const CoreValues = () => {
  return (
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto" >
        <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 class="text-2xl font-bold md:text-4xl md:leading-tight">Core Values</h2>
      </div>
      
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-12 my-5">
        
        
        <div>
          <div class="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl">
            <svg class="shrink-0 size-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="10" height="14" x="3" y="8" rx="2"/><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"/><path d="M8 18h.01"/></svg>
          </div>
          <div class="mt-5">
            <h3 class="text-lg font-bold">Crafted Expertise</h3>
            <p class="mt-1 font-light leading-relaxed">Leveraging our deep-rooted knowledge of cloud technologies, we strive to provide the most effective and cost-efficient solutions for your business.</p>
          </div>
        </div>

        <div>
          <div class="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl">
            <svg class="shrink-0 size-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>
          </div>
          <div class="mt-5">
            <h3 class="text-lg font-bold">Reliable</h3>
            <p class="mt-1 font-light leading-relaxed">A strong online presence is essential for your business. We offer reliable hosting solutions that guarantee maximum uptime and accessibility.</p>
          </div>
        </div>


        <div>
          <div class="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl">
            <svg class="shrink-0 size-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>
          </div>
          <div class="mt-5">
            <h3 class="text-lg font-bold">Extended Support</h3>
            <p class="mt-1 font-light leading-relaxed">Our commitment to your success extends beyond the initial purchase. We offer ongoing guided support to ensure you achieve your goals.</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default CoreValues