<script>
  import { createEventDispatcher, onMount } from "svelte";

  export let title;
  export let description;
  export let lesson;

  let dispatch = createEventDispatcher();

  function returnLesson() {
    dispatch("lesson", {
      name: lesson,
    });
  }
</script>

<div
  on:click={returnLesson}
  class=" overflow-hidden cursor-pointer shadow-2xl rounded-lg ring-1 ring-black ring-opacity-5 bg-white max-w-[300px]"
>
  <div class="px-4 py-3">
    <h3 class="text-lg md:text-lg leading-8 font-medium text-gray-700">
      {title}
    </h3>
    <p class="text-xs md:text-base eading-5 font-normal text-gray-600">{description}</p>
  </div>
  <slot />
</div>
