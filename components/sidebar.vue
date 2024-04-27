<template>
	<aside class="h-screen">
		<nav class="h-full flex flex-col bg-[#5B49CB] border-r shadow-sm">
			<div class="p-4 pb-2 flex justify-between items-center">
				<button
					@click="setExpanded"
					class="p-1.5 rounded-lg bg-[#5B49CB] text-white hover:bg-[#7A68DC]"
				>
					<div v-if="!expanded">
						<ChevronFirst />
					</div>
					<div v-else>
						<ChevronLast />
					</div>
				</button>
			</div>
			<div class="mt-3">
				<ul class="flex-1 px-3 mb-2">
					<NuxtLink
						to="/MainPage"
						class="relative flex text-white hover:text-white hover:bg-[#7A68DC] focus:bg-[#7A68DC] items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group"
						:class="[
							active
								? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
								: ' text-gray-600',
						]"
					>
						<Icon name="heroicons:home" size="20" />
						<span
							:class="[
								'overflow-hidden',
								'transition-all ml-3',
								expanded ? 'w-32' : 'w-0 ml-0',
							]"
						>
							Асосӣ
						</span>
						<div v-if="!expanded">
							<div
								class="absolute left-full rounded-md px-2 py-1 ml-6 -mt-5 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all"
								:class="{
									'group-hover:visible': true,
									'group group-hover:opacity-100': true,
									'group-hover:translate-x-0': true,
								}"
							>
								Асосӣ
							</div>
						</div>
					</NuxtLink>
				</ul>
				<ul class="flex-1 px-3 mb-2">
					<NuxtLink
						@click="openMenu"
						class="relative flex text-white hover:text-white hover:bg-[#7A68DC] focus:bg-[#7A68DC] items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group"
						:class="[
							active
								? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
								: ' text-gray-600',
						]"
					>
						<Library class="text-white" />
						<span
							:class="[
								'overflow-hidden',
								'transition-all ml-3',
								expanded ? 'w-32' : 'w-0 ml-0',
							]"
						>
							Китобҳо
						</span>
						<div v-if="!expanded">
							<div
								class="absolute left-full rounded-md px-2 py-1 ml-6 -mt-5 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all"
								:class="{
									'group-hover:visible': true,
									'group group-hover:opacity-100': true,
									'group-hover:translate-x-0': true,
								}"
							>
								Китобҳо
							</div>
						</div>
					</NuxtLink>
				</ul>
				<ul v-if="closeMenu">
					<li class="ml-10">
						<ul class="ms-0.5 space-y-2 border-s-2 border-black">
							<li class="animate__animated animate__fadeInLeft">
								<NuxtLink
									to="/CatalogeBookPage"
									class="block py-1 ps-4 hover:text-white transition-all -ms-px cursor-pointer active:border-blue-600 border-s-2 border-transparent text-sm hover:border-slate-400"
								>
									Каталоги китобҳо
								</NuxtLink>
							</li>
						</ul>
					</li>
					<li class="ml-10">
						<ul class="ms-0.5 space-y-2 border-s-2 border-black">
							<li class="animate__animated animate__fadeInLeft">
								<NuxtLink
									to="/giveaddstudentbook"
									class="block py-1 ps-4 -ms-px hover:text-white transition-all cursor-pointer active:border-blue-600 border-s-2 border-transparent text-sm hover:border-slate-400"
								>
									Додани китоб
								</NuxtLink>
							</li>
						</ul>
					</li>
					<li class="ml-10">
						<ul class="ms-0.5 space-y-2 border-s-2 border-black">
							<li class="animate__animated animate__fadeInLeft">
								<NuxtLink
									to="returnbookpage"
									class="block py-1 ps-4 -ms-px hover:text-white transition-all cursor-pointer active:border-blue-600 border-s-2 border-transparent text-sm hover:border-slate-400"
								>
									Бозгашти китоб
								</NuxtLink>
							</li>
						</ul>
					</li>
					<li class="ml-10">
						<ul
							class="ms-0.5 space-y-2 border-s-2 border-black dark:border-slate-800"
						>
							<li class="animate__animated animate__fadeInLeft">
								<NuxtLink
									to="/reportbookpage"
									class="block py-1 ps-4 -ms-px hover:text-white transition-all cursor-pointer active:border-blue-600 border-s-2 border-transparent text-sm hover:border-slate-400"
								>
									Ҳисобдиҳӣ
								</NuxtLink>
							</li>
						</ul>
					</li>
				</ul>
				<ul class="flex-1 px-3 mb-2">
					<li
						class="relative text-white hover:bg-[#7A68DC] focus:bg-[#7A68DC] flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group"
						:class="[
							active
								? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
								: ' text-gray-600',
						]"
					>
						<Icon name="heroicons:information-circle" size="20" />
						<span
							:class="[
								'overflow-hidden',
								'transition-all ml-3',
								expanded ? 'w-32' : 'w-0 ml-0',
							]"
						>
							Маълумот
						</span>
						<div v-if="!expanded">
							<div
								class="absolute left-full rounded-md px-2 py-1 ml-6 -mt-5 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all"
								:class="{
									'group-hover:visible': true,
									'group group-hover:opacity-100': true,
									'group-hover:translate-x-0': true,
								}"
							>
								Маълумот
							</div>
						</div>
					</li>
				</ul>
				<ul class="flex-1 px-3 mb-2">
					<NuxtLink
						to="/"
						class="relative flex text-white hover:text-white hover:bg-[#7A68DC] focus:bg-[#7A68DC] items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group"
						:class="[
							active
								? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
								: ' text-gray-600',
						]"
					>
						<Icon name="heroicons:power" size="20" />
						<span
							:class="[
								'overflow-hidden',
								'transition-all ml-3',
								expanded ? 'w-32' : 'w-0 ml-0',
							]"
						>
							Баромадан
						</span>
						<div v-if="!expanded">
							<div
								class="absolute left-full rounded-md px-2 py-1 ml-6 -mt-5 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all"
								:class="{
									'group-hover:visible': true,
									'group group-hover:opacity-100': true,
									'group-hover:translate-x-0': true,
								}"
							>
								Баромадан
							</div>
						</div>
					</NuxtLink>
				</ul>
				<div class="border-t border-[#CDBEFF] flex p-3">
					<img src="../public/profile.png" class="w-10 h-10 rounded-md" />
					<div
						:class="[
							'flex justify-between',
							'items-center overflow-hidden',
							'transition-all',
							expanded ? 'w-52 ml-3' : 'w-0 ml-0',
						]"
					>
						<div class="leading-4">
							<h4 class="font-semibold text-white">Админ</h4>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</aside>
</template>

<script setup lang="ts">
import { ChevronFirst, ChevronLast, Library } from 'lucide-vue-next'
import { ref } from 'vue'
const closeMenu = ref(false)
const expanded = ref(false)
const active = ref(false)
const setExpanded = () => {
	expanded.value = !expanded.value
	closeMenu.value = false
}
const openMenu = () => {
	closeMenu.value = !closeMenu.value
}
</script>
