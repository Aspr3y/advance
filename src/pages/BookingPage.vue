<script setup lang="ts">
</script>

<template>
    <div class="py-8 px-4">
        <h1 class="text-4xl font-semibold underline">
           Booking Page
        </h1>
      <br/>
      <div class="flex items-center justify-center">
        <div class="datepicker relative form-floating mb-3 xl:w-96" data-mdb-toggle-button="false">
          <input type="datetime-local"
                 class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                 placeholder="Select a date" />
          <label for="floatingInput" class="text-gray-700">Select a date</label>
          <button class="datepicker-toggle-button" data-mdb-toggle="datepicker">
            <i class="fas fa-calendar datepicker-toggle-icon"></i>
          </button>
        </div>
      </div>
    </div>
</template>

