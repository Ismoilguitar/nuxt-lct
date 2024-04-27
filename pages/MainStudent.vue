<template>
	<nav
		class="none z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
	>
		<div class="px-3 py-3 lg:px-5 lg:pl-3">
			<div class="flex items-center justify-between">
				<div class="flex items-center justify-start rtl:justify-end">
					<Sheet>
						<SheetTrigger
							class="inline-flex size-9 border border-gray-200 text-gray-800 hover:bg-gray-100 items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 py-2 mr-2 px-2 text-base flex-shrink-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
						>
							<Icon name="heroicons:bars-3-bottom-left" size="20" />
						</SheetTrigger>
						<SheetContent side="left">
							<SheetHeader>
								<SheetTitle
									class="flex-none text-xl font-semibold dark:text-white"
								>
									<div class="px-6">
										<a href="#" aria-label="Brand">Меню</a>
									</div>
								</SheetTitle>
								<nav
									class="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
								>
									<ul class="space-y-1.5">
										<li>
											<a
												class="flex items-center gap-x-3.5 py-2 px-3 text-sm text-slate-700 rounded-lg hover:bg-gray-100"
												href="#"
											>
												<Icon name="heroicons:home" size="20" />
												Саҳифаи асосӣ
											</a>
										</li>
										<li>
											<a
												class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300"
												href="#"
											>
												<Icon name="heroicons:building-library" size="20" />
												<span class="ms-3">Китобҳо</span>
											</a>
										</li>
										<li>
											<a
												class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300"
												href="#"
											>
												<Icon name="heroicons:square-3-stack-3d" size="20" />
												<span class="ms-3">Хондан</span>
											</a>
										</li>
										<li>
											<a
												class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300"
												href="#"
											>
												<Icon name="heroicons:information-circle" size="20" />
												<span class="ms-3">Маълумот</span>
											</a>
										</li>
										<li>
											<a
												class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300"
												href="#"
											>
												<Icon name="heroicons:cog-6-tooth" size="20" />
												<span class="ms-3">Танзимот</span>
											</a>
										</li>
										<li>
											<a
												class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300"
												href="#"
											>
												<Icon name="heroicons:power" size="20" />
												<span class="ms-3">Баромад</span>
											</a>
										</li>
									</ul>
								</nav>
							</SheetHeader>
						</SheetContent>
					</Sheet>
					<a class="flex ms-2 md:me-24">
						<img
							src="../public/лого.png"
							class="h-8 me-3"
							alt="FlowBite Logo"
						/>
						<span
							class="self-center text-xl font-semibold text whitespace-nowrap dark:text-white"
							>Китобхонаи коллеҷи технологии шаҳри Душанбе</span
						>
					</a>
				</div>
			</div>
		</div>
	</nav>
	<div class="flex">
		<aside class="h-screen">
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
							to="/MainStudent"
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
						<li
							class="relative flex focus:bg-indigo-50 items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group"
							:class="[
								active
									? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
									: 'hover:bg-indigo-50 text-gray-600',
							]"
						>
							<Icon name="heroicons:clipboard" size="20" />
							<span
								:class="[
									'overflow-hidden',
									'transition-all ml-3',
									expanded ? 'w-32' : 'w-0 ml-0',
								]"
							>
								Хондан
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
									Хондан
								</div>
							</div>
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
				</div>
			</nav>
		</aside>
		<div>
			<h1 class="text-xl font-semibold ml-8">Cаҳифаи асосӣ</h1>
			<!-- Cards -->
			<div class="grid grid-cols-3 mt-2 mobile-left ml-8 gap-4">
				<div
					class="relative flex flex-col bg-white border shadow-sm rounded-xl border-t-4 border-t-blue-600"
				>
					<div class="ml-2 mt-3 p-3">
						<div class="absolute rounded-lg bg-[#6366F1] p-[8px] text-white">
							<SquareLibrary />
						</div>
						<p
							class="ml-12 text-ellipsis font-semibold text-[#7E7280]"
							style="line-height: 1.25rem"
						>
							Миқдори китобҳо
						</p>
						<span class="ml-12 font-bold text-[#111827]">300+</span>
					</div>
					<br />
					<div
						class="bg-gray-100 left-0 right-0 bottom-0 border-t rounded-b-xl py-2.5 md:py-4 md:px-5"
					>
						<span
							class="text-[#6366F1] font-semibold ml-10 cursor-pointer hover:underline"
							>Маълумоти берштар</span
						>
					</div>
				</div>
				<div
					class="relative flex flex-col bg-white border shadow-sm rounded-xl border-t-4 border-t-blue-600"
				>
					<div class="ml-2 mt-3 p-3">
						<div class="absolute rounded-lg bg-[#6366F1] p-[8px] text-white">
							<BookCheck />
						</div>
						<p
							class="ml-12 text-ellipsis font-semibold text-[#7E7280]"
							style="line-height: 1.25rem"
						>
							Гирифтани китобҳо
						</p>
						<span class="ml-12 font-bold text-[#111827]">300+</span>
					</div>
					<br />
					<div
						class="bg-gray-100 left-0 right-0 bottom-0 border-t rounded-b-xl py-2.5 md:py-4 md:px-5"
					>
						<span
							class="text-[#6366F1] font-semibold ml-10 cursor-pointer hover:underline"
							>Маълумоти берштар</span
						>
					</div>
				</div>
				<div
					class="relative flex flex-col bg-white border shadow-sm rounded-xl border-t-4 border-t-blue-600"
				>
					<div class="ml-2 mt-3 p-3">
						<div class="absolute rounded-lg bg-[#6366F1] p-[8px] text-white">
							<Info />
						</div>
						<p
							class="ml-12 text-ellipsis font-semibold text-[#7E7280]"
							style="line-height: 1.25rem"
						>
							Гирифтани китобҳо
						</p>
						<span class="ml-12 font-bold text-[#111827]">300+</span>
					</div>
					<br />
					<div
						class="bg-gray-100 left-0 right-0 bottom-0 border-t rounded-b-xl py-2.5 md:py-4 md:px-5"
					>
						<span
							class="text-[#6366F1] font-semibold ml-10 cursor-pointer hover:underline"
							>Маълумоти берштар</span
						>
					</div>
				</div>
			</div>
			<h1 class="text-xl font-semibold ml-8">
				Маълумот дар бораи Коллеҷи технологии шаҳри Душанбе
			</h1>
			<div
				class="grid mb-8 border ml-8 mobile-top border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800"
			>
				<figure
					class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700"
				>
					<blockquote
						class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400"
					>
						<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
							Very easy this was to integrate
						</h3>
						<p class="my-4">
							If you care for your time, I hands down would go with this."
						</p>
					</blockquote>
					<figcaption class="flex items-center justify-center">
						<img
							class="rounded-full w-9 h-9"
							src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
							alt="profile picture"
						/>
						<div
							class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3"
						>
							<div>Bonnie Green</div>
							<div class="text-sm text-gray-500 dark:text-gray-400">
								Developer at Open AI
							</div>
						</div>
					</figcaption>
				</figure>
				<figure
					class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700"
				>
					<blockquote
						class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400"
					>
						<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
							Solid foundation for any project
						</h3>
						<p class="my-4">
							Designing with Figma components that can be easily translated to
							the utility classes of Tailwind CSS is a huge timesaver!"
						</p>
					</blockquote>
					<figcaption class="flex items-center justify-center">
						<img
							class="rounded-full w-9 h-9"
							src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
							alt="profile picture"
						/>
						<div
							class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3"
						>
							<div>Roberta Casas</div>
							<div class="text-sm text-gray-500 dark:text-gray-400">
								Lead designer at Dropbox
							</div>
						</div>
					</figcaption>
				</figure>
				<figure
					class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700"
				>
					<blockquote
						class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400"
					>
						<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
							Mindblowing workflow
						</h3>
						<p class="my-4">
							Aesthetically, the well designed components are beautiful and will
							undoubtedly level up your next application."
						</p>
					</blockquote>
					<figcaption class="flex items-center justify-center">
						<img
							class="rounded-full w-9 h-9"
							src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
							alt="profile picture"
						/>
						<div
							class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3"
						>
							<div>Jese Leos</div>
							<div class="text-sm text-gray-500 dark:text-gray-400">
								Software Engineer at Facebook
							</div>
						</div>
					</figcaption>
				</figure>
				<figure
					class="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700"
				>
					<blockquote
						class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400"
					>
						<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
							Efficient Collaborating
						</h3>
						<p class="my-4">
							You have many examples that can be used to create a fast prototype
							for your team."
						</p>
					</blockquote>
					<figcaption class="flex items-center justify-center">
						<img
							class="rounded-full w-9 h-9"
							src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
							alt="profile picture"
						/>
						<div
							class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3"
						>
							<div>Joseph McFall</div>
							<div class="text-sm text-gray-500 dark:text-gray-400">
								CTO at Google
							</div>
						</div>
					</figcaption>
				</figure>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import {
	BookCheck,
	ChevronFirst,
	ChevronLast,
	Info,
	MoreVertical,
	SquareLibrary,
} from 'lucide-vue-next'

import { ref } from 'vue'
const expanded = ref(false)
const active = ref(false)
const setExpanded = () => {
	expanded.value = !expanded.value
}
</script>
<style>
@media (max-width: 1200px) {
	.h-screen {
		overflow: hidden;
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
	.grid {
		grid-template-columns: 1fr;
	}
	.grid > * {
		margin-bottom: 3.5rem;
	}
	.ml-5,
	.ml-8,
	.ml-11 {
		margin-left: 0rem;
	}
	.ml-5 {
		margin-top: -40px;
		padding: 40px;
	}
	.ml-8 {
		margin-top: -45px;
		padding: 40px;
	}
	.ml-11 {
		margin-top: -45px;
		padding: 40px;
	}
	.mobile-text {
		margin-left: -5rem;
		margin-top: -50px;
	}
	.mobile-top {
		margin-top: -20px;
		margin-left: -40px;
	}
	.mobile-left {
		margin-left: -20px;
	}
}
</style>
