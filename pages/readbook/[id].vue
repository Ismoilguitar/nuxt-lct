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
							src="./public/лого.png"
							class="h-8 me-3"
							alt="ЛОГО"
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
									<a
										class="block py-1 ps-4 -ms-px cursor-pointer active:border-blue-600 border-s-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
									>
										Идоракунии пойгоҳи додаҳо
									</a>
								</li>
							</ul>
						</li>
						<li class="ml-10">
							<ul
								class="ms-0.5 space-y-2 border-s-2 border-slate-100 dark:border-slate-800"
							>
								<li class="animate__animated animate__fadeInLeft">
									<NuxtLink
										to="/CatalogeBookPage"
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
										to="/givebookpage"
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
									<a
										class="block py-1 ps-4 -ms-px cursor-pointer active:border-blue-600 border-s-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
									>
										Ҳисобдиҳӣ
									</a>
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
		<div class="ml-12">
			<h1 class="text-xl font-semibold ml-8">Cаҳифа барои маълумот</h1>
			<div
				class="p-6 w-full bg-gray-100 flex items-center justify-center rounded-xl"
			>
				<div class="container max-w-screen-lg mx-auto">
					<div>
						<h2 class="font-semibold text-xl text-gray-600">
							Форма барои дидани маълумот
						</h2>

						<div class="bg-white shadow-lg p-4 px-4 rounded-3xl md:p-8 mb-6">
							<div
								class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3"
							>
								<div class="text-gray-600">
									<div
										v-if="photo"
										class="flex-shrink-0 relative w-full rounded-t-xl -mt-28 overflow-hidden pt-[80%] sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs"
									>
										<img :src="photo" id="imagePreview" />
									</div>
								</div>

								<div class="lg:col-span-2">
									<form
										@submit.prevent="UpdateBook"
										class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"
										disabled
									>
										<div class="md:col-span-5">
											<Label class="leading-loose">Номи пурраи донишҷӯ</Label>
											<input
												type="text"
												class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
												placeholder="Номи пурраи донишҷӯ"
												v-model="namestd"
												disabled
											/>
										</div>
                                        <div class="md:col-span-5">
											<Label class="leading-loose">Ихтисос</Label>
											<input
												type="text"
												class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
												placeholder="Ихтисос"
												v-model="speciality"
												disabled
											/>
										</div>
                                        <div class="md:col-span-5">
											<Label class="leading-loose">Курс</Label>
											<input
												type="text"
												class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
												placeholder="Курс"
												v-model="course"
												disabled
											/>
										</div>
										<div class="md:col-span-5">
											<Label class="leading-loose">Тамос</Label>
											<input
												type="text"
												class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
												placeholder="Тамос"
												v-model="phone"
												disabled
											/>
										</div>
										<div class="md:col-span-5">
											<Label class="leading-loose">Номи китоб</Label>
											<input
												type="text"
												class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
												placeholder="Номи китоб"
												v-model="namebook"
												disabled
											/>
										</div>
										<div class="md:col-span-5">
											<Label class="leading-loose">Соли нашр</Label>
											<input
												type="text"
												class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
												placeholder="Соли нашр"
												v-model="year"
												required
												disabled
											/>
										</div>
										<div class="md:col-span-5">
											<Label class="leading-loose">Муаллиф</Label>
											<input
												type="text"
												class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
												placeholder="Соли нашр"
												v-model="author"
												required
												disabled
											/>
										</div>

										<div class="md:col-span-3">
											<Label class="leading-loose">Санаи бақайдгирӣ</Label>
											<div
												class="relative focus-within:text-gray-600 text-gray-400"
											>
												<input
													type="text"
													class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
													placeholder="25/02/2020"
													v-model="datetime"
													required
													disabled
												/>
												<div class="absolute left-3 top-2">
													<Calendar class="w-6 h-6" />
												</div>
											</div>
										</div>

										<div class="md:col-span-2">
											<Label class="leading-loose">Миқдор</Label>
											<input
												type="text"
												class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
												placeholder="Миқдор"
												v-model="kol"
												required
												disabled
											/>
										</div>
										<div class="md:col-span-5 text-right">
											<div class="inline-flex items-end">
												<NuxtLink to="/CatalogeBookPage">
													<button
														class="flex bg-blue-600 hover:bg-blue-500 ml-3 text-white font-bold py-2 px-4 rounded"
													>
														<ChevronLeft />
														Баргаштан
													</button>
												</NuxtLink>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import axios from 'axios'
import {
	Calendar,
	ChevronFirst,
	ChevronLast,
	ChevronLeft,
} from 'lucide-vue-next'
import { ref } from 'vue'
const author = ref('')
const expanded = ref(false)
const active = ref(false)
const closeMenu = ref(false)
const book = ref([])
const namestd = ref('')
const speciality = ref('')
const course = ref('')
const name = ref('')
const namebook = ref('')
const year = ref('')
const datetime = ref('')
const kol = ref('')
const photo = ref('')
const phone = ref('')
const readBooks = async () => {
	try {
		const route = useRoute()
		const id = route.params.id
		const response = await axios.get(`http://localhost:8181/${id}`)
		book.value = response.data.rows
		name.value = response.data.rows[0].name
		year.value = response.data.rows[0].year
		datetime.value = response.data.rows[0].datetime
		kol.value = response.data.rows[0].kol
		photo.value = response.data.rows[0].photo
		author.value = response.data.rows[0].author
	} catch (err) {
		console.log(err)
	}
}
const UpdateBook = async () => {
	try {
		const route = useRoute()
		const id = route.params.id
		const response = await axios.put(`http://localhost:8181/update/${id}`, {
			name: name.value,
			year: year.value,
			datereg: datereg.value,
			kol: kol.value,
		})
		alert('Updated users successfully')
		console.log('res', response.data)
	} catch (err) {
		console.log(err)
	}
}

const setExpanded = () => {
	expanded.value = !expanded.value
}
const openMenu = () => {
	closeMenu.value = !closeMenu.value
}
onMounted(() => {
	readBooks()
})
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
