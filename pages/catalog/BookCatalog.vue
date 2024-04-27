<template>
	<div
		class="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200"
	>
		<div
			class="grid items-center justify-center h-full max-w-lg grid-cols-4 mx-auto font-medium lg:flex mt-3"
		>
			<NuxtLink
				to="/catalog"
				class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
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
				class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
			>
				<LibraryBig
					class="w-5 h-5 mb-2 text-blue-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
				/>
				<span
					class="text-sm text-blue-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
					>Китобҳо</span
				>
			</NuxtLink>
			<NuxtLink
				class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
			>
				<Info
					class="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
				/>
				<span
					class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
					>Маълумот</span
				>
			</NuxtLink>
			<NuxtLink
				type="button"
				class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
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
		<NuxtLink to="/catalog">
			<ChevronLeft class="text-blue-400" />
		</NuxtLink>
		<h1 class="ml-12 text-ellipsis font-semibold text-xl">Саҳифаи китобҳо</h1>
	</div>
	<div class="flex flex-1 gap-2">
		<NuxtLink
			to="/catalog/TableBook"
			class="justify-center text-center items-center flex-col w-[260px] h-[260px] mt-2 bg-white border shadow-sm rounded-2xl p-2"
		>
			<!-- Feature 1 -->
			<div class="flex flex-col justify-center items-center px-5 py-14">
				<div
					class="w-14 h-14 rounded-full bg-[#F0FAFF] flex justify-center items-center"
				>
					<Library class="text-3xl text-[#63C4FF]" />
				</div>
				<h3 class="mt-12 text-xl font-bold text-[#65C2FD]">Каталоги китобҳо</h3>
			</div>
		</NuxtLink>
		<NuxtLink
			to="/catalog/BookAdd"
			class="justify-center text-center items-center flex-col w-[260px] h-[260px] mt-2 bg-white border shadow-sm rounded-2xl p-2"
		>
			<div class="flex flex-col justify-center items-center px-5 py-14">
				<div
					class="w-14 h-14 rounded-full bg-[#F3E9FF] flex justify-center items-center"
				>
					<BookPlus class="text-3xl text-[#825FF9]" />
				</div>
				<h3 class="mt-12 text-xl font-bold text-[#825FF9]">
					Бақайдгирии китобҳо
				</h3>
			</div>
		</NuxtLink>
	</div>
	<div class="flex flex-1 gap-2">
		<div
			class="justify-center text-center items-center flex-col w-[260px] h-[260px] mt-2 bg-white border shadow-sm rounded-2xl p-2"
		>
			<!-- Feature 1 -->
			<div class="flex flex-col justify-center items-center px-5 py-14">
				<div
					class="w-14 h-14 rounded-full bg-[#FEEDFD] flex justify-center items-center"
				>
					<BookUp class="text-3xl text-[#FE81E5]" />
				</div>
				<h3 class="mt-12 text-xl font-bold text-[#FE81E5]">Додани китобҳо</h3>
			</div>
		</div>
		<div
			class="justify-center text-center items-center flex-col w-[260px] h-[260px] mt-2 bg-white border shadow-sm rounded-2xl p-2"
		>
			<!-- Feature 1 -->
			<div class="flex flex-col justify-center items-center px-5 py-14">
				<div
					class="w-14 h-14 rounded-full bg-[#FEEDFD] flex justify-center items-center"
				>
					<BookDown class="text-3xl text-[#FFA261]" />
				</div>
				<h3 class="mt-12 text-xl font-bold text-[#FFA261]">Бозгашти китобҳо</h3>
			</div>
		</div>
	</div>
	<div class="flex flex-1 gap-2">
		<NuxtLink
			to="/catalog/Invoce"
			class="justify-center text-center items-center flex-col w-[210px] h-[260px] mt-2 bg-white border shadow-sm rounded-2xl p-2"
		>
			<div class="flex flex-col justify-center items-center px-5 py-14">
				<div
					class="w-14 h-14 rounded-full bg-[#EEF0FC] flex justify-center items-center"
				>
					<Calculator class="text-3xl text-[#5B82FF]" />
				</div>
				<h3 class="mt-12 text-xl font-bold text-[#5B82FF]">Ҳисобдиҳӣ</h3>
			</div>
		</NuxtLink>
	</div>
</template>
<script setup lang="ts">
import {
	BookDown,
	BookPlus,
	BookUp,
	Calculator,
	ChevronLeft,
	Info,
	LayoutGrid,
	Library,
	LibraryBig,
	Power,
} from 'lucide-vue-next'
</script>
<style>
body {
	background: #f4f6f5;
}
</style>
