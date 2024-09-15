import React from 'react'
import Albert_Image from './Images/Albert'
import Richard_Image from './Images/Richard'

const Team = () => {
  return (
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto" id='team'>
  <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight">Our Team</h2>
  </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        
        <div class="text-center">
          
          <div class="rounded-xl sm:size-48 lg:size-60 mx-auto border border-black bg-[#c0c5ce] bg-opacity-15">
            <Albert_Image />
          </div>

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

          <div class="rounded-xl sm:size-48 lg:size-60 mx-auto border border-black bg-[#c0c5ce] bg-opacity-15">
            <Richard_Image />
          </div>
          
        <div class="mt-2 sm:mt-4">
          <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
            Richard Malombe
          </h3>
          <p class="text-xs text-gray-600 sm:text-sm lg:text-base">
            Digital Marketing / Brand Ambassador
          </p>
        </div>
        </div>

        <div class="text-center">
          
          <div class="rounded-xl sm:size-48 lg:size-60 mx-auto border border-black bg-[#c0c5ce] bg-opacity-15">
            <Albert_Image />
          </div>

          <div class="mt-2 sm:mt-4">
            <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
              Bright Ngongonda
            </h3>
            <p class="text-xs text-gray-600 sm:text-sm lg:text-base">
              Founder / CEO / Operations
            </p>
          </div>
        </div>

        <div class="text-center">
          
          <div class="rounded-xl sm:size-48 lg:size-60 mx-auto border border-black bg-[#c0c5ce] bg-opacity-15">
            <Albert_Image />
          </div>

          <div class="mt-2 sm:mt-4">
            <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
              Chinsisi Mollen
            </h3>
            <p class="text-xs text-gray-600 sm:text-sm lg:text-base">
              Founder / CEO / Operations
            </p>
          </div>
        </div>
        
    </div>
    </div>

    
  )
}

export default Team