<template>
	<div class="flex">
		<!-- <aside class="h-screen">
			<nav class="h-full flex flex-col bg-white border-r shadow-sm">
				<div class="p-4 pb-2 flex justify-between items-center">
					<button
						@click="setExpanded"
						class="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
					>
						<div v-if="!expanded">
							<ChevronFirst />
						</div>
						<div v-else="expanded">
							<ChevronLast />
						</div>
					</button>
				</div>
				<div class="mt-3">
					<ul class="flex-1 px-3 mb-2">
						<NuxtLink
							to="/MainPage"
							class="relative flex focus:bg-indigo-50 items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group"
							:class="[
								active
									? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
									: 'hover:bg-indigo-50 text-gray-600',
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
									class="absolute left-full w-full rounded-md px-2 py-1 ml-6 -mt-5 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all"
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
							class="relative flex focus:bg-indigo-50 items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group"
							:class="[
								active
									? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
									: 'hover:bg-indigo-50 text-gray-600',
							]"
						>
							<Icon name="heroicons:building-library" size="20" />
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
							<ul
								class="ms-0.5 space-y-2 border-s-2 border-slate-100 dark:border-slate-800"
							>
								<li class="animate__animated animate__fadeInLeft">
									<NuxtLink
										to="/CatalogeBookPage"
										class="block py-1 ps-4 -ms-px cursor-pointer active:border-blue-600 border-s-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
									>
										Каталоги китобҳо
									</NuxtLink>
								</li>
							</ul>
						</li>
						<li class="ml-10">
							<ul
								class="ms-0.5 space-y-2 border-s-2 border-slate-100 dark:border-slate-800"
							>
								<li class="animate__animated animate__fadeInLeft">
									<NuxtLink
										to="/Book"
										class="block py-1 ps-4 -ms-px cursor-pointer active:border-blue-600 border-s-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
									>
										Бақайдгирии китоб
									</NuxtLink>
								</li>
							</ul>
						</li>
						<li class="ml-10">
							<ul
								class="ms-0.5 space-y-2 border-s-2 border-slate-100 dark:border-slate-800"
							>
								<li class="animate__animated animate__fadeInLeft">
									<NuxtLink
										to="/giveaddstudentbook"
										class="block py-1 ps-4 -ms-px cursor-pointer active:border-blue-600 border-s-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
									>
										Додани китоб
									</NuxtLink>
								</li>
							</ul>
						</li>
						<li class="ml-10">
							<ul
								class="ms-0.5 space-y-2 border-s-2 border-slate-100 dark:border-slate-800"
							>
								<li class="animate__animated animate__fadeInLeft">
									<NuxtLink
										to="/returnbookpage"
										class="block py-1 ps-4 -ms-px cursor-pointer active:border-blue-600 border-s-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
									>
										Бозгашти китоб
									</NuxtLink>
								</li>
							</ul>
						</li>
						<li class="ml-10">
							<ul
								class="ms-0.5 space-y-2 border-s-2 border-slate-100 dark:border-slate-800"
							>
								<li class="animate__animated animate__fadeInLeft">
									<NuxtLink
										to="/reportbookpage"
										class="block py-1 ps-4 -ms-px cursor-pointer active:border-blue-600 border-s-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
									>
										Ҳисобдиҳӣ
									</NuxtLink>
								</li>
							</ul>
						</li>
					</ul>
					<ul class="flex-1 px-3 mb-2">
						<li
							class="relative focus:bg-indigo-50 flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group"
							:class="[
								active
									? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
									: 'hover:bg-indigo-50 text-gray-600',
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
					<hr class="my-3" />
					<ul class="flex-1 px-3 mb-2">
						<li
							class="relative focus:bg-indigo-50 flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group"
							:class="[
								active
									? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
									: 'hover:bg-indigo-50 text-gray-600',
							]"
						>
							<Icon name="heroicons:cog-8-tooth" size="20" />
							<span
								:class="[
									'overflow-hidden',
									'transition-all ml-3',
									expanded ? 'w-32' : 'w-0 ml-0',
								]"
							>
								Танзимот
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
									Танзимот
								</div>
							</div>
						</li>
					</ul>
					<ul class="flex-1 px-3 mb-2">
						<NuxtLink
							to="/"
							class="relative flex focus:bg-indigo-50 items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group"
							:class="[
								active
									? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
									: 'hover:bg-indigo-50 text-gray-600',
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
					<div class="border-t flex p-3">
						<img src="../public/profile.png" class="w-10 h-10 rounded-md" />
						<div
							:class="[
								'flex justify-between',
								'items-center overflow-hidden',
								'transition-all',
								expanded ? 'w-52 ml-3' : 'w-0 ml-0',
							]"
						>
							<div className="leading-4">
								<h4 className="font-semibold">Админ</h4>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</aside> -->
		<Sidebar />
		<div>
			<div class="mobile-text">
				<h1 class="text-xl font-semibold ml-8">Cаҳифаи асосӣ</h1>
			</div>
			<!-- Cards -->
			<div class="grid grid-cols-3 gap-4 ml-28">
				<div
					class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10"
				>
					<span
						class="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"
					></span>
					<div class="relative z-10 mx-auto max-w-md">
						<span
							class="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400"
						>
							<SquareLibrary class="h-10 w-10 text-white transition-all" />
						</span>
						<div
							class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90"
						>
							<p>
								Миқдори китобҳо
							</p>
						</div>
						<div class="pt-5 text-base font-semibold leading-7">
							<p>
								<a
									href="#"
									class="text-sky-500 transition-all duration-300 group-hover:text-white"
									>Маълумоти бештар &rarr;
								</a>
							</p>
						</div>
					</div>
				</div>
				<div
					class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10"
				>
					<span
						class="absolute top-10 z-0 h-20 w-20 rounded-full bg-blue-500 transition-all duration-300 group-hover:scale-[10]"
					></span>
					<div class="relative z-10 mx-auto max-w-md">
						<span
							class="grid h-20 w-20 place-items-center rounded-full bg-blue-500 transition-all duration-300 group-hover:bg-blue-400"
						>
							<BookCheck class="h-10 w-10 text-white transition-all" />
						</span>
						<div
							class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90"
						>
							<p>
								Гирифтани китобҳо
							</p>
						</div>
						<div class="pt-5 text-base font-semibold leading-7">
							<p>
								<a
									href="#"
									class="text-sky-500 transition-all duration-300 group-hover:text-white"
									>Маълумоти бештар &rarr;
								</a>
							</p>
						</div>
					</div>
				</div>
				<div
					class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10"
				>
					<span
						class="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"
					></span>
					<div class="relative z-10 mx-auto max-w-md">
						<span
							class="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400"
						>
							<Info class="h-10 w-10 text-white transition-all" />
						</span>
						<div
							class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90"
						>
							<p>
								Додани китобҳо
							</p>
						</div>
						<div class="pt-5 text-base font-semibold leading-7">
							<p>
								<a
									href="#"
									class="text-sky-500 transition-all duration-300 group-hover:text-white"
									>Маълумоти бештар &rarr;
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import {BookCheck, SquareLibrary, Info} from 'lucide-vue-next'
</script>
<style>
@media (max-width: 1200px) {
	.hidden {
		display: block;
	}
	.mobile-text {
		margin-top: 10px;
	}
	.mobile_grid {
		grid: none;
	}
	.h-screen {
		display: hidden;
		opacity: 0;
	}
	.mobile {
		opacity: 1;
	}
	.text {
		font-size: 10px;
	}
	.ml-3 {
		margin-top: 20px;
		margin-left: -3.5rem;
	}
	.w-80 {
		width: 25rem;
	}

	.ml-5,
	.ml-11 {
		margin-left: 0rem;
	}
	.mobile-top {
		margin-left: -40px;
	}
	.mobile-left {
		margin-left: -20px;
	}
}
</style>
