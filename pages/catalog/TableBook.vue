<template>
	<div
		class="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200"
	>
		<div
			class="grid items-center justify-center h-full max-w-lg grid-cols-4 mx-auto font-medium lg:flex mt-3"
		>
			<NuxtLink
				to="/catalog"
				class="inline-flex flex-col items-center justify-center px-5 group"
			>
				<LayoutGrid
					class="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
				/>
				<span
					class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
					>Асосӣ</span
				>
			</NuxtLink>
			<NuxtLink
				to="/catalog/BookCatalog"
				class="inline-flex flex-col items-center justify-center px-5 group"
			>
				<LibraryBig
					class="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
				/>
				<span
					class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
					>Китобҳо</span
				>
			</NuxtLink>
			<NuxtLink
				class="inline-flex flex-col items-center justify-center px-5 group"
			>
				<Info
					class="w-5 h-5 mb-2 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
				/>
				<span
					class="text-sm text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
					>Маълумот</span
				>
			</NuxtLink>
			<NuxtLink
				type="button"
				class="inline-flex flex-col items-center justify-center px-5 group"
			>
				<Power
					class="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
				/>
				<span
					class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
					>Баромад</span
				>
			</NuxtLink>
		</div>
	</div>
	<div class="flex h-15 bg-gray-100 p-4 border">
		<NuxtLink to="/catalog/BookCatalog">
			<ChevronLeft class="text-blue-400" />
		</NuxtLink>
		<h1 class="ml-12 text-ellipsis font-semibold text-xl">Каталоги китобҳо</h1>
	</div>

	<table
		class="table-auto lg:w-full text-sm snap-x scroll-pl-5 max-md:grid max-md:gap-x-12 max-md:overflow-x-scroll max-md:-mx-4 max-md:px-4 [&_thead]:bg-slate-50 max-md:[&_thead]:contents max-md:[&_tbody]:contents [&_tbody_tr]:border-b [&_tbody_tr]:border-slate-100 max-md:[&_tr]:contents [&_th]:text-slate-900 [&_th]:font-semibold [&_td]:text-slate-600 [&_th]:py-3 md:[&_th]:first:pl-3 [md:&_th]:last:pr-3 [&_td]:pb-3 md:[&_td]:pt-3 md:[&_td]:first:pl-3 md:[&_td]:last:pr-3 [&_tr_td:first-child]:font-medium [&_tr_td:first-child]:text-slate-900 [&_th]:whitespace-nowrap [&_td]:whitespace-nowrap max-md:[&_th]:min-w-[60vw] max-md:[&_td]:min-w-[60vw] max-md:[&_tr:last-child_td]:min-w-[calc(100vw-2rem)] [&_th]:text-left [&_th]:group-last:text-right [&_td]:text-left md:[&_td:last-of-type]:text-right max-md:[&_th]:sticky max-md:[&_th]:left-0 [&_td]:snap-start max-md:[&_td]:border-b max-md:[&_td:last-of-type]:border-none [&_td]:border-slate-100"
	>
		<thead>
			<tr>
				<th class="max-md:row-start-1 max-md:col-start-1">№</th>
				<th class="max-md:row-start-3 max-md:col-start-1">Расм</th>
				<th class="max-md:row-start-5 max-md:col-start-1">Номи китоб</th>
				<th class="max-md:row-start-7 max-md:col-start-1">Соли нашр</th>
				<th class="max-md:row-start-9 max-md:col-start-1">Санаи бақайдгирӣ</th>
				<th class="max-md:row-start-11 max-md:col-start-1">Муаллиф</th>
				<th class="max-md:row-start-13 max-md:col-start-1">Миқдор</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(data, index) in book" :key="index">
				<td :class="{ 'max-md:row-start-2 max-md:col-start-': index + 1 }">
					{{ index + 1 }}
				</td>
				<td :class="{ 'max-md:row-start-4 max-md:col-start-': index + 1 }">
					<img
						class="w-10 h-10 rounded-full"
						v-bind:src="data.photo"
						alt="Jese image"
					/>
				</td>
				<td :class="{ 'max-md:row-start-6 max-md:col-start-': index + 1 }">
					{{ data.name }}
				</td>
				<td :class="{ 'max-md:row-start-8 max-md:col-start-': index + 1 }">
					{{ data.year }}
				</td>
				<td :class="{ 'max-md:row-start-10 max-md:col-start-': index + 1 }">
					{{ data.datetime }}
				</td>
				<td :class="{ 'max-md:row-start-12 max-md:col-start-': index + 1 }">
					{{ data.author }}
				</td>
				<td :class="{ 'max-md:row-start-[14] max-md:col-start-': index + 1 }">
					{{ data.kol }}
				</td>
			</tr>
		</tbody>
	</table>
</template>
<script setup lang="ts">
import axios from 'axios'
import {
	ChevronLeft,
	Info,
	LayoutGrid,
	LibraryBig,
	Power,
} from 'lucide-vue-next'
import { onMounted, ref } from 'vue'
const book = ref([])
let indexofBook = []
const fetchData = async () => {
	try {
		const response = await axios.get('http://localhost:8181/')
		book.value = response.data.rows

		for (let i = 2; i <= 8; i += 2) {
			indexofBook.push(i)
		}
		console.log('gets', book.value)
	} catch (err) {
		console.log(err)
	}
}
onMounted(fetchData)
</script>
<style>
body {
	background: #f4f6f5;
}
</style>
