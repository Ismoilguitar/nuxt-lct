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
										to="/retrunbookpage"
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
		<div class="ml-3 mt-4">
			<div class="flex flex-col">
				<div class="-m-1.5 overflow-x-auto">
					<div class="p-1.5 min-w-full inline-block align-middle">
						<div
							class="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700"
						>
							<div class="flex py-3 px-4">
								<div class="relative max-w-xs">
									<label class="sr-only">Search</label>
									<input
										type="text"
										name="hs-table-with-pagination-search"
										id="hs-table-with-pagination-search"
										class="py-2 px-3 ps-9 block w-full border border-gray-400 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
										placeholder="Ҷустучӯи китоб..."
										v-model="booksItemSearch"
									/>
									<div
										class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3"
									>
										<Icon
											name="heroicons:magnifying-glass"
											class="size-4 text-gray-400"
										/>
									</div>
								</div>
							</div>
							<div class="overflow-hidden">
								<table
									class="max-w-[350px] divide-y divide-gray-200 dark:divide-gray-700"
								>
									<thead class="bg-gray-50 dark:bg-gray-700">
										<tr>
											<th
												scope="col"
												class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
											>
												№
											</th>
											<th
												scope="col"
												class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
											>
												Номи пурра
											</th>
											<th
												scope="col"
												class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
											>
												Ихтисос
											</th>
											<th
												scope="col"
												class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
											>
												Курс
											</th>
											<th
												scope="col"
												class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
											>
												Тамос
											</th>
											<th
												scope="col"
												class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
											>
												Номи китоб
											</th>
											<th
												scope="col"
												class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
											>
												Соли нашр
											</th>
											<th
												scope="col"
												class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
											>
												Муаллиф
											</th>
											<th
												scope="col"
												class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
											>
												Миқдор
											</th>
											<th
												scope="col"
												class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
											>
												Cанаи бақайдгирӣ
											</th>
											<th
												scope="col"
												class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
											>
												Бозгашт
											</th>
											<th
												scope="col"
												class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
											>
												Бозгашт
											</th>
											<th
												scope="col"
												class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
											>
												Бозгашт нашуд
											</th>
										</tr>
									</thead>
									<tbody
										class="divide-y divide-gray-200"
										v-if="book.length > 0"
									>
										<tr
											:class="{
												'bg-green-100': selectedItemId === data.id,
												'bg-red-100': selectedItemId2 === data.id,
											}"
											v-for="(data, index) in filteredItems"
											:key="index"
										>
											<td
												class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
											>
												{{ index + 1 }}
											</td>
											<td
												class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
											>
												{{ data.namestudent }}
											</td>
											<td
												class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
											>
												{{ data.speciality }}
											</td>
											<td
												class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
											>
												{{ data.course }}
											</td>
											<td
												class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
											>
												{{ data.phone }}
											</td>
											<td
												class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
											>
												{{ data.namebook }}
											</td>
											<td
												class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
											>
												{{ data.year }}
											</td>
											<td
												class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
											>
												{{ data.author }}
											</td>
											<td
												class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
											>
												{{ data.kol }}
											</td>
											<td
												class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
											>
												{{ data.datetime }}
											</td>
											<td
												class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
											>
												{{ data.returnbook }}
											</td>
											<td
												class="px-6 py-4 whitespace-nowrap text-sm font-medium items-center"
											>
												<input
													type="checkbox"
													class="ml-3"
													:checked="selectedItemId == data.id"
													@change="handleCheckboxChange(data.id)"
												/>
											</td>
											<td
												class="px-6 py-4 whitespace-nowrap text-sm font-medium items-center"
											>
												<input
													type="checkbox"
													class="ml-3"
													:checked="selectedItemId2 == data.id"
													@change="handleCheckboxChange2(data.id)"
												/>
											</td>
										</tr>
									</tbody>
									<tbody v-else>
										<tr>
											<td
												class="px-6 py-4 whitespace-nowrap text-sm font-medium items-center"
											>
												<div
													class="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
													role="status"
													aria-label="loading"
												>
													<span class="sr-only">Loading...</span>
												</div>
												Интизор шавед...
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import axios from 'axios'
import { ChevronFirst, ChevronLast } from 'lucide-vue-next'

import { computed, onMounted, ref } from 'vue'
const expanded = ref(false)
const active = ref(false)
const closeMenu = ref(false)
const book = ref([])
const selectedItemId = ref(null)
const selectedItemId2 = ref(null)
const booksItemSearch = ref('')
const setExpanded = () => {
	expanded.value = !expanded.value
}
const openMenu = () => {
	closeMenu.value = !closeMenu.value
}
const handleCheckboxChange = (itemId: any) => {
	if (selectedItemId.value === itemId) {
		// Unselect if the same item is clicked again
		selectedItemId.value = null
	} else {
		selectedItemId.value = itemId
	}
}
const handleCheckboxChange2 = (itemId2: any) => {
	if (selectedItemId2.value === itemId2) {
		// Unselect if the same item is clicked again
		selectedItemId2.value = null
	} else {
		selectedItemId2.value = itemId2
	}
}
const fetchData = async () => {
	try {
		const response = await axios.get('http://localhost:8181/givebookread')
		book.value = response.data.rows
	} catch (err) {
		console.log(err)
	}
}
const filteredItems = computed(() => {
	return book.value.filter(item => {
		return Object.values(item).some(value => {
			return String(value).toLowerCase().includes(booksItemSearch.value)
		})
	})
})
onMounted(fetchData)
</script>
<style>
.bg-green-100 {
	background-color: #d1fae5; /* Change this to your desired green color */
}
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
