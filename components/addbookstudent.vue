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
			<h1 class="text-xl font-semibold ml-8">
				Cаҳифа барои бақайдгирии барои донишҷӯёни ки китоб дода шуд
			</h1>
			<div
				class="p-6 w-full bg-gray-100 flex items-center justify-center rounded-xl"
			>
				<div class="container max-w-screen-lg mx-auto">
					<div>
						<h2 class="font-semibold text-xl text-gray-600">
							Бақайдгирии донишҷӯ
						</h2>

						<div class="bg-white shadow-lg p-4 px-4 rounded-3xl md:p-8 mb-6">
							<div
								class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3"
							>
								<div class="text-gray-600 font-semibold text-xl">
									<h1>Форма барои бақайдгирии китобҳо</h1>
								</div>

								<div class="lg:col-span-2">
									<form
										@submit.prevent="fetchAddData"
										class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"
									>
										<div class="md:col-span-5">
											<Label class="leading-loose">Номи пурраи донишҷӯ</Label>
											<input
												type="text"
												class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
												placeholder="Номи пурраи донишҷӯ"
												v-model="namestudent"
												required
											/>
										</div>
										<div class="md:col-span-5">
											<Label class="leading-loose">Ихтисос</Label>
											<input
												type="text"
												class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
												placeholder="Ихтисос"
												v-model="speciality"
												required
											/>
										</div>
										<div class="md:col-span-5">
											<Label class="leading-loose">Курс</Label>
											<input
												type="text"
												class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
												placeholder="Курс"
												v-model="course"
												required
											/>
										</div>
										<div class="md:col-span-5">
											<Label class="leading-loose">Рақами телефон</Label>
											<input
												type="text"
												class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
												placeholder="Рақами телефон"
												v-model="phone"
												required
											/>
										</div>
										<div class="md:col-span-5">
											<Label class="leading-loose">Номи китоб</Label>
											<input
												type="text"
												class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
												placeholder="Номи китоб"
												v-model="namebook"
												required
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
											/>
										</div>
										<div class="md:col-span-5">
											<Label class="leading-loose">Муаллиф</Label>
											<input
												type="text"
												class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
												placeholder="Муаллиф"
												v-model="author"
												required
											/>
										</div>
										<div class="md:col-span-5">
											<Label class="leading-loose">Миқдор</Label>
											<input
												type="text"
												class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
												placeholder="Миқдор"
												v-model="kol"
												required
											/>
										</div>
										<div class="md:col-span-5">
											<Label class="leading-loose">Санаи бозгашти китоб</Label>
											<input
												type="datetime-local"
												class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
												placeholder="Санаи бозгашти китоб"
												v-model="returnbook"
												required
											/>
										</div>

										<div class="md:col-span-5 text-right">
											<div class="inline-flex items-end">
												<Toaster />
												<button
													type="submit"
													class="flex bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
												>
													<BookPlus />
													Иловаи китоб
												</button>
												<NuxtLink to="/giveaddstudentbook">
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
import { Toaster } from '@/components/ui/toast'
import { useToast } from '@/components/ui/toast/use-toast'
import axios from 'axios'
import {
	BookPlus,
	ChevronFirst,
	ChevronLast,
	ChevronLeft,
} from 'lucide-vue-next'
import { ref } from 'vue'
const { toast } = useToast()
const photo = ref('')
const expanded = ref(false)
const active = ref(false)
const closeMenu = ref(false)
const namestudent = ref('')
const speciality = ref('')
const course = ref('')
const namebook = ref('')
const year = ref('')
const kol = ref('')
const phone = ref('')
const returnbook = ref('')
const author = ref('')
const fetchAddData = async () => {
	try {
		const response = await axios.post('http://localhost:8181/addgivebook', {
			namestudent: namestudent.value,
			speciality: speciality.value,
			course: course.value,
			phone: phone.value,
			namebook: namebook.value,
			year: year.value,
			author: author.value,
			kol: kol.value,
			returnbook: returnbook.value,
		})
		console.log('add book', response)
		// Создаем новый объект Date, который содержит текущую дату и время
		var currentDate = new Date()

		// Получаем различные компоненты текущей даты и времени
		var years = currentDate.getFullYear()
		var month = currentDate.getMonth() + 1 // Месяцы начинаются с 0, поэтому добавляем 1
		var day = currentDate.getDate()
		var hours = currentDate.getHours()
		var minutes = currentDate.getMinutes()
		var seconds = currentDate.getSeconds()

		// Формируем строку с текущей датой и временем
		var dateString =
			years +
			'-' +
			month +
			'-' +
			day +
			' ' +
			hours +
			':' +
			minutes +
			':' +
			seconds

		// Выводим текущую дату и время в консоль
		console.log(dateString)
		toast({
			title: 'Китоб бомуваффақият илова шуд!',
			description: `${dateString}`,
			variant: 'successgreen',
		})
		// window.location.href = '/'
	} catch (err) {
		console.log(err)
		// Создаем новый объект Date, который содержит текущую дату и время
		var currentDate = new Date()

		// Получаем различные компоненты текущей даты и времени
		var years = currentDate.getFullYear()
		var month = currentDate.getMonth() + 1 // Месяцы начинаются с 0, поэтому добавляем 1
		var day = currentDate.getDate()
		var hours = currentDate.getHours()
		var minutes = currentDate.getMinutes()
		var seconds = currentDate.getSeconds()

		// Формируем строку с текущей датой и временем
		var dateString =
			years +
			'-' +
			month +
			'-' +
			day +
			' ' +
			hours +
			':' +
			minutes +
			':' +
			seconds

		// Выводим текущую дату и время в консоль
		console.log(dateString)
		toast({
			title: 'Маълумотро хато ворид намудед!',
			description: `${dateString}`,
			variant: 'destructive',
		})
	}
}
const handleFileUpload = (event: any) => {
	const file = event.target.files[0]
	if (file && file.type.startsWith('image/')) {
		photo.value = URL.createObjectURL(file)
		console.log('image src', photo.value)
	} else {
		alert('Please select a valid image file.')
	}
}
const setExpanded = () => {
	expanded.value = !expanded.value
}
const openMenu = () => {
	closeMenu.value = !closeMenu.value
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
