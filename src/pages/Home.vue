<template>
  <section id="hero-section" class="flex p-4">
    <div class="flex flex-col gap-6 justify-center">
      <h1
        class="text-[clamp(2.188rem,1.741rem+2.23vw,3.75rem)] font-extrabold tracking-loose lg:tracking-tight leading-none text-gray-900">
        Building digital <br />
        products & brands.
      </h1>
      <p class="text-xl text-gray-500 font-light">
        This free and open-source landing page template was built using the
        utility classes from Tailwind CSS and based on the components from the Flowbite Library and the Blocks System.
      </p>
      <div class="flex flex-col lg:flex-row gap-6">
        <button
          class="border border-gray-200 cursor-pointer text-sm px-5 py-3 font-medium rounded-md bg-[#F3F4F6] hover:bg-[#d6ddeb]">
          View on Github
        </button>
        <button
          class="border border-gray-200 cursor-pointer text-sm px-5 py-3 font-medium rounded-md bg-[#F3F4F6] hover:bg-[#d6ddeb]">
          Get Figma file
        </button>
      </div>
    </div>
    <div>
      <div class="hidden lg:block">
        <img src="/home/hero.png" alt="image of a arrow in a computer" />
      </div>
    </div>
  </section>

  <section id="popular-company" class="p-4">
    <div class="grid grid-cols-2 gap-6 font-medium md:grid-cols-3 md:gap-8 lg:grid-cols-6 py-8">
      <h2 class="text-3xl text-gray-400 hover:text-gray-900">airbnb</h2>
      <h2 class="text-3xl text-gray-400 hover:text-gray-900">Google</h2>
      <h2 class="text-3xl text-gray-400 hover:text-gray-900">Microsoft</h2>
      <h2 class="text-3xl text-gray-400 hover:text-gray-900">Spotify</h2>
      <h2 class="text-3xl text-gray-400 hover:text-gray-900">mailchimp</h2>
      <h2 class="text-3xl text-gray-400 hover:text-gray-900">Mashable</h2>
    </div>
  </section>

  <section id="about-us" class="bg-[#F9FAFB] p-4">
    <div class="flex lg:py-[96px] py-6 md:py-8">
      <div class="flex flex-col gap-4 py-4 justify-between">
        <h2 class="text-[clamp(1.625rem,1.393rem+0.54vw,1.875rem)] font-extrabold text-gray-900 tracking-wide">
          Work with tools you already use
        </h2>
        <p class="text-xl font-light text-gray-500">
          Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate
          critical development work, eliminate toil, and deploy changes with ease
        </p>
        <ul class="flex flex-col gap-3 sm:gap-6">
          <li class="flex gap-1 items-center font-medium text-gray-900">
            <span><img src="/home/checked.png" alt="checkmark" class="w-5 h-5" /></span><span>Continuous integration and
              deployment</span>
          </li>
          <li class="flex gap-1 items-center font-medium text-gray-90">
            <span><img src="/home/checked.png" alt="checkmark" class="w-5 h-5" /></span><span>Development
              workflow</span>
          </li>
          <li class="flex gap-1 items-center font-medium text-gray-90">
            <span><img src="/home/checked.png" alt="checkmark" class="w-5 h-5" /></span><span>Knowledge
              management</span>
          </li>
        </ul>
        <p class="text-xl font-light text-gray-500">
          Deliver great service experiences fast - without the complexity of traditional ITSM solutions.
        </p>
      </div>
      <div class="lg:block hidden">
        <img src="/home/feature-1.png" alt="analytical graph" class="max-h-[900px]" />
      </div>
    </div>

    <div class="flex lg:py-[96px] py-6 md:py-8">
      <div class="lg:block hidden">
        <img src="/home/feature-2.png" alt="analytical graph" />
      </div>
      <div class="flex flex-col gap-6 py-9">
        <h2 class="text-[clamp(1.625rem,1.393rem+0.54vw,1.875rem)] font-extrabold">We invest in the world's potential
        </h2>
        <p class="font-light text-xl text-gray-500">
          Deliver great service experiences fast - without the complexity of traditionalTSM solutions. Accelerate
          critical development work, eliminate toil, and deploy changes with ease.
        </p>
        <ul>
          <li class="flex gap-1 items-center border-b border-gray-200 py-2 font-medium">
            <span><img src="/home/checked.png" alt="checkmark" class="w-5 h-5" /></span>
            <span>Dynamic reports and dashboards</span>
          </li>
          <li class="flex gap-1 items-center border-b border-gray-200 py-2 font-medium">
            <span><img src="/home/checked.png" alt="checkmark" class="w-5 h-5" /></span>
            <span>Templates for everyone</span>
          </li>
          <li class="flex gap-1 items-center border-b border-gray-200 py-2 font-medium">
            <span><img src="/home/checked.png" alt="checkmark" class="w-5 h-5" /></span>
            <span>Development workflow</span>
          </li>
          <li class="flex gap-1 items-center border-b border-gray-200 py-2 font-medium">
            <span><img src="/home/checked.png" alt="checkmark" class="w-5 h-5" /></span>
            <span>Limitless business automation</span>
          </li>
          <li class="flex gap-1 items-center py-2 font-medium">
            <span><img src="/home/checked.png" alt="checkmark" class="w-5 h-5" /></span>
            <span>Knowledge management</span>
          </li>
        </ul>
        <p class="font-light text-xl text-gray-400">
          Deliver great service experiences fast - without the complexity of traditional ITSM solutions.
        </p>
      </div>
    </div>
  </section>

  <section id="unique-features" class="p-4">
    <div class="lg:py-[96px] py-6 md:py-8 flex flex-col lg:flex-row gap-4">
      <div class="flex flex-col gap-4">
        <p class="font-medium text-lg text-purple-600">Trusted Worldwide</p>
        <h2 class="text-[clamp(1.625rem,1.393rem+0.54vw,1.875rem)] font-extrabold text-gray-900">
          Trusted by over 600 million users and 10,000 teams
        </h2>
        <p class="text-gray-500 font-light sm:text-xl border-t pt-4">
          Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect
          you and your customers.
        </p>
        <a href="https://www.google.com" class="font-medium text-purple-600 block">
          Explore Legality Guide <span class="text-2xl">→</span>
        </a>
        <a href="https://www.google.com" class="font-medium text-purple-600">
          Visit the Trust Center <span class="text-2xl">→</span>
        </a>
      </div>
      <div class="grid md:grid-cols-2 md:gap-4">
        <div class="flex flex-col gap-2">
          <div><img src="/home/server.png" alt="server icon" class="w-10 h-10" /></div>
          <h2 class="font-bold text-2xl">99.99% uptime</h2>
          <p class="font-light text-gray-500 text-lg lg:text-base">For Landwind, with zero maintenance downtime</p>
        </div>
        <div class="flex flex-col gap-2">
          <div><img src="/home/persons.png" alt="two people icon" class="w-10 h-10" /></div>
          <h2 class="font-bold text-2xl">600M+ Users</h2>
          <p class="font-light text-gray-500 text-lg lg:text-base">Trusted by over 600 million users around the world
          </p>
        </div>
        <div class="flex flex-col gap-2">
          <div><img src="/home/earth.png" alt="earth logo" class="w-10 h-10" /></div>
          <h2 class="font-bold text-2xl">100+ countries</h2>
          <p class="font-light text-gray-500 text-lg lg:text-base">Have used Landwind to create functional websites</p>
        </div>
        <div class="flex flex-col gap-2">
          <div><img src="/home/cart.png" alt="shopping cart" class="w-10 h-10" /></div>
          <h2 class="font-bold text-2xl">5+ Million</h2>
          <p class="font-light text-gray-500 text-lg lg:text-base">Transactions per day</p>
        </div>
      </div>
    </div>
  </section>

  <section id="quotes" class="p-4 bg-[#F9FAFB]">
    <div class="flex flex-col gap-6 lg:py-[96px] py-6 md:py-8">
      <div><img src="/home/PhQuotesFill (1).png" alt="quotes" class="w-10 m-auto" /></div>
      <p class="font-medium text-[clamp(1.25rem,1.179rem+0.36vw,1.5rem)] text-gray-900">
        "Landwind is just awesome. It contains tons of predesigned components and pages starting from login screen to
        complex dashboard. Perfect choice for your next SaaS application."
      </p>
      <div class="flex justify-center items-center gap-1 md:gap-2">
        <div><img src="/home/Favicon.png" alt="image of a girl" class="w-5 md:w-7" /></div>
        <p class="font-medium">Ballnerina Capuchina</p>
        <p class="font-light text-gray-400 border-l-2 border-gray-900 pl-1 md:pl-2 text-sm">CEO at Google</p>
      </div>
    </div>
  </section>
</template>


<script setup>

</script>

<style scoped></style>
