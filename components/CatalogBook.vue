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
		<div class="ml-10 mt-4">
			<div class="p-1 ml-20">
				<p class="text-xl font-semibold">Каталоги китобҳо</p>
			</div>
			<div class="flex flex-col ml-20">
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
										class="py-2 px-3 mobile-table ps-9 block w-full border border-gray-400 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
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
								<div class="ml-3">
									<Button
										variant="primarys"
										size="sm"
										class="w-30 h-10"
										@click="exportPDF()"
									>
										<Upload class="size-5"/>
										Формати PDF
									</Button>
								</div>
								<NuxtLink to="/Book" class="ml-[62%]"
									><Button variant="primarys">
										Бакайдгирӣ
										<BookPlus />
									</Button>
								</NuxtLink>
							</div>
							<div class="overflow-hidden">
								<table class="min-w-full divide-y divide-gray-200">
									<thead class="bg-gray-50">
										<tr>
											<th scope="col" class="py-3 px-4 pe-0">
												<div class="flex items-center h-5">
													<input
														v-model="selectedItemId"
														type="checkbox"
														class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
														@change="handleCheckboxChange(data.id)"
													/>
													<label
														for="hs-table-pagination-checkbox-all"
														class="sr-only"
														>Checkbox</label
													>
												</div>
											</th>
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
												Расм
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
												Cанаи бақайдгирӣ
											</th>
											<th
												scope="col"
												class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
											>
												Муаллиф
											</th>
											<th
												scope="col"
												class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
											>
												Миқдор
											</th>
											<th
												scope="col"
												class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
											>
												Дидан
											</th>
											<th
												scope="col"
												class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
											>
												Таҳрир
											</th>
											<th
												scope="col"
												class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
											>
												Несткунӣ
											</th>
										</tr>
									</thead>
									<tbody
										class="divide-y divide-gray-200 dark:divide-gray-700"
										v-if="book.length > 0"
									>
										<tr
											v-if="book.length > 0"
											v-for="(data, index) in filteredItems"
											:key="index"
											:class="{ 'bg-gray-100': selectedItemId === data.id }"
										>
											<td class="py-3 ps-4">
												<div class="flex items-center h-5">
													<input
														type="checkbox"
														class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
														:checked="selectedItemId === data.id"
														@change="handleCheckboxChange(data.id)"
													/>
													<label
														for="hs-table-pagination-checkbox-1"
														class="sr-only"
														>Checkbox</label
													>
												</div>
											</td>
											<td
												class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
											>
												{{ index + 1 }}
											</td>
											<td
												scope="row"
												class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
											>
												<img
													class="w-10 h-10 rounded-full"
													v-bind:src="data.photo"
													alt="Jese image"
												/>
											</td>
											<td
												class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
											>
												{{ data.name }}
											</td>
											<td
												class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
											>
												{{ data.year }}
											</td>
											<td
												class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
											>
												{{ data.datetime }}
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
												class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium"
											>
												<NuxtLink :to="`/${data.id}`">
													<Button variant="primaryblue"
														><Icon name="heroicons:eye"
													/></Button>
												</NuxtLink>
											</td>
											<td
												class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium"
											>
												<NuxtLink :to="`/update/${data.id}`">
													<Button variant="successgreen"
														><Icon name="heroicons:pencil-square"
													/></Button>
												</NuxtLink>
											</td>
											<td
												class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium"
											>
												<Toaster />
												<Button
													variant="destructive"
													@click="handleDelete(data.id)"
													><Icon name="heroicons:trash"
												/></Button>
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
import { Toaster } from '@/components/ui/toast'
import { useToast } from '@/components/ui/toast/use-toast'
import axios from 'axios'

import { BookPlus, Upload } from 'lucide-vue-next'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

import { computed, onMounted, ref } from 'vue'
const book = ref([])
const selectedItemId = ref(null)
const booksItemSearch = ref('')

const { toast } = useToast()
const handleCheckboxChange = (itemId: any) => {
	if (selectedItemId.value === itemId) {
		// Unselect if the same item is clicked again
		selectedItemId.value = null
	} else {
		selectedItemId.value = itemId
	}
}
const exportPDF = () => {
	// Установка шрифтов для pdfmake
	pdfMake.vfs = pdfFonts.pdfMake.vfs
	// Генерация QR-кодов для данных в book.value
	//const qrCodes = book.value.map(item => ({ qr: item.id.toString() }))

	const docDefinition = {
		pageSize: 'A4',
		pageOrientation: 'landspace',
		pageMargins: [50, 50, 30, 60],

		content: [
			{ text: 'Cодирот ба формати pdf', style: 'header' },
			{
				table: {
					headerRows: 2,
					widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
					body: [
						[
							'№',
							'Номи китоб',
							'Соли нашр',
							'Санаи бақайдгирӣ',
							'Муаллиф',
							'Миқдор',
							'QR-код',
						],
						...book.value.map((item, index) => [
							index + 1,
							item.name,
							item.year,
							item.datetime,
							item.author,
							item.kol,
							{
								qr: `${index + 1},${item.name}, ${item.year}, ${
									item.datetime
								}, ${item.author}, ${item.kol}`,
								fit: '50',
							}, // Создание QR-кода для каждой записи
						]),
					],
				},
				layout: {
					defaultBorder: false,
					paddingLeft: function (i, node) {
						return 4
					},
					paddingRight: function (i, node) {
						return 4
					},
					paddingTop: function (i, node) {
						return 2
					},
					paddingBottom: function (i, node) {
						return 2
					},
					// drawCell: function (cell, data) {
					// 	if (data.row.index > 0 && data.column.index === 7) {
					// 		// Проверка, что это ячейка с чекбоксом
					// 		// Настраиваем отрисовку чекбокса
					// 		const checkbox = [
					// 			{
					// 				type: 'rect',
					// 				x: 2,
					// 				y: 2,
					// 				w: 6,
					// 				h: 6,
					// 				r: 1,
					// 				lineWidth: 1,
					// 				lineColor: '#000',
					// 				color: '#fff',
					// 			},
					// 		]
					// 		if (data.row.raw.selected) {
					// 			// Если чекбокс выбран, рисуем галочку
					// 			checkbox.push({
					// 				type: 'line',
					// 				x1: 2,
					// 				y1: 5,
					// 				x2: 5,
					// 				y2: 8,
					// 				lineWidth: 1.5,
					// 				lineColor: '#000',
					// 			})
					// 			checkbox.push({
					// 				type: 'line',
					// 				x1: 5,
					// 				y1: 8,
					// 				x2: 8,
					// 				y2: 2,
					// 				lineWidth: 1.5,
					// 				lineColor: '#000',
					// 			})
					// 		}
					// 		cell.padding = 0
					// 		cell.alignment = 'center'
					// 		cell.stack = checkbox
					// 	}
					// },
				},
			},
			// ...book.value.map(item => [
			// 	item.id,
			// 	item.namestudent,
			// 	item.phone,
			// 	item.speciality,
			// 	item.datetime,
			// 	item.returnbook,
			// 	{
			// 		qr: `${item.namestudent}, ${item.phone}, ${item.speciality}, ${item.datetime}, ${item.returnbook}`,
			// 		fit: '50',
			// 	}, // Создание QR-кода для каждой записи
			// ]),
		],
		styles: {
			header: {
				fontSize: 15,
				bold: true,
				margin: [0, 0, 0, 10],
			},
		},
		header: function (currentPage, pageCount) {
			return {
				text:
					'Саҳифа ' + currentPage.toString() + ' аз ' + pageCount.toString(),
				alignment: 'right',
				margin: [0, 30, 10, 50],
			}
		},
		footer: {
			text: 'Ҳисобот',
			alignment: 'center',
			margin: [0, 0, 0, 10],
		},
		// Установка минимальной высоты ячеек таблицы
		defaultStyle: {
			fontSize: 10, // Уменьшение размера шрифта
			minCellHeight: 60, // Установите высоту по вашему усмотрению
		},
	}

	pdfMake.createPdf(docDefinition).download('reportbook.pdf')
}
const fetchData = async () => {
	try {
		const response = await axios.get('http://localhost:8181/')
		book.value = response.data.rows
		console.log('gets', book.value)
	} catch (err) {
		console.log(err)
	}
}
const handleDelete = id => {
	axios.delete(`http://localhost:8181/delete/${id}`).then(res => {
		console.log('res', res)
		fetchData()
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
			title: 'Китоб бомуваффақият нест шуд!',
			description: `${dateString}`,
			variant: 'successgreen',
		})
		location.reload()
	})
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
@media (max-width: 1200px) {
	.hidden {
		display: block;
	}
	.ml-10 {
		margin-left: 0px;
	}
	.mobile-add {
		margin-left: -50px;
	}
	.mobile-table {
		display: none;
	}
}
</style>
