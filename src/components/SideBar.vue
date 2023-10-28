<template>
	<div class="w-[20vw] h-[80vh] p-7 hidden lg:inline-flex flex-col justify-between">
		<div>
			<a class="sidebar-item">
				<span class="icon text-2xl">
					<ion-icon name="game-controller-outline"></ion-icon>
				</span>
				Game Store
			</a>
			<a class="sidebar-item">
				<span class="icon text-2xl">
					<ion-icon name="library-outline"></ion-icon>
				</span>
				Library
			</a>
			<a class="sidebar-item">
				<span class="icon text-2xl">
					<ion-icon name="chatbubbles-outline"></ion-icon>
				</span>
				Community
			</a>	
			<a class="sidebar-item">
				<span class="icon text-2xl">
					<ion-icon name="people-outline"></ion-icon>
				</span>
				Friends
			</a>									
		</div>
		<div>
			<a class="sidebar-item">
				<span class="icon text-2xl">
					<ion-icon name="settings-outline"></ion-icon>
				</span>
				Settings
			</a>
			<a class="sidebar-item">
				<span class="icon text-2xl">
					<ion-icon name="help-circle-outline"></ion-icon>
				</span>
				Help
			</a>						
		</div>
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'SideBar'
}
</script>