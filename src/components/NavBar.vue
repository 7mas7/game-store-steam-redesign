<template>
  <div class="flex justify-between items-center p-2">
    <img src="@/assets/logo.png" class="w-[140px]" loading="lazy">    
    <!-- search form -->
    <form class="bg-unwhite rounded shadow hidden lg:flex-center" @submit.prevent="return">
        <span class="flex-center w-[40px]">
        <ion-icon name="search-outline"></ion-icon>
      </span>
      <input type="text" class="lg:w-80 sm:w-[100%] border-none outline-none bg-transparent focus:bg-unwhite p-2" placeholder="Search For Games">
    </form>
    <!-- options list -->
    <div class="gap-[10px] hidden lg:flex-center">
      <button class="nav-icon">
        <ion-icon name="notifications-outline"></ion-icon>
      </button>
      <button class="nav-icon">
        <ion-icon name="cart-outline"></ion-icon>
      </button>      
      <button class="flex gap-2 items-center">
        <img src="@/assets/user-avatar.jpg" class="rounded-full w-[40px] border-solid border-primary border-2">
        <p class="font-light">{{ user_name }}</p>
        <span class="icon flex-center">
          <ion-icon name="chevron-down-outline"></ion-icon>
        </span>
      </button>
    </div>
    <!-- sidebar toggle -->
    <button class="text-3xl cursor-pointer lg:hidden sm:block">
      <ion-icon name="menu-outline"></ion-icon>
    </button>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'NavBar',
    data(){
      return {
        user_name: 'Jesse Pinkman'
      }
    }
  }
</script>