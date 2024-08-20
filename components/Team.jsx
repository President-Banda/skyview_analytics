import React from 'react'

const Team = () => {
  return (
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight">Our Team</h2>
  </div>

  <div class="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
    <div class="text-center">
      <img class="rounded-xl sm:size-48 lg:size-60 mx-auto" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar"></img>
      <div class="mt-2 sm:mt-4">
        <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
          Albert Banda
        </h3>
        <p class="text-xs text-gray-600 sm:text-sm lg:text-base">
          Founder / CEO / Operations
        </p>
      </div>
    </div>

    <div class="text-center">
      <img class="rounded-xl sm:size-48 lg:size-60 mx-auto" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar"></img>
      <div class="mt-2 sm:mt-4">
        <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
          Richard Malombe
        </h3>
        <p class="text-xs text-gray-600 sm:text-sm lg:text-base">
          Digital Marketing / Brand Ambassador
        </p>
      </div>
    </div>
    </div>
    </div>

    
  )
}

export default Team