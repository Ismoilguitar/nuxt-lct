<template>
	<div
		class="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200"
	>
		<div
			class="grid items-center justify-center h-full max-w-xl grid-cols-4 mx-auto font-medium lg:flex mt-3"
		>
			<NuxtLink
				to="/catalog"
				class="inline-flex flex-col items-center justify-center px-5 group focus:group-hover:text-blue-500"
			>
				<LayoutGrid
					class="w-5 h-5 mb-2 text-blue-600 focus:text-blue-600 group-hover:text-blue-600 focus:group-hover:text-blue-500"
				/>
				<span
					class="text-sm text-blue-600 group-hover:text-blue-600 focus:group-hover:text-blue-500"
					>Асосӣ</span
				>
			</NuxtLink>
			<NuxtLink
				to="/catalog/BookCatalog"
				class="inline-flex flex-col items-center justify-center px-5 group"
			>
				<LibraryBig
					class="w-5 h-5 mb-2 text-gray-500 group-hover:text-blue-600 focus:group-hover:text-blue-500"
				/>
				<span
					class="text-sm text-gray-500 group-hover:text-blue-600 focus:group-hover:text-blue-500"
					>Китобҳо</span
				>
			</NuxtLink>
			<NuxtLink
				class="inline-flex flex-col items-center justify-center px-5 group"
			>
				<Info
					class="w-5 h-5 mb-2 text-gray-500 group-hover:text-blue-600 focus:group-hover:text-blue-500"
				/>
				<span
					class="text-sm text-gray-500 group-hover:text-blue-600 focus:group-hover:text-blue-500"
					>Маълумот</span
				>
			</NuxtLink>
			<NuxtLink
				to="/"
				class="inline-flex flex-col items-center justify-center px-5 group"
			>
				<Power
					class="w-5 h-5 mb-2 text-gray-500 group-hover:text-blue-600 focus:group-hover:text-blue-500"
				/>
				<span
					class="text-sm text-gray-500 group-hover:text-blue-600 focus:group-hover:text-blue-500"
					>Баромад</span
				>
			</NuxtLink>
		</div>
	</div>
	<div class="flex h-15 bg-gray-100 p-4 border">
		<h1 class="ml-12 text-ellipsis font-semibold text-xl">Саҳифаи асосӣ</h1>
	</div>
	<div class="flex items-center justify-center mt-5">
		<div
			class="grid grid-cols-1 font-mono gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4"
		>
			<!-- 1 card -->
			<div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
				<div
					class="text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6"
				>
					<SquareLibrary class="h-8 w-8" />
				</div>
				<div class="mt-8">
					<p class="text-xl font-semibold my-2">Миқдори китобҳо</p>
					<div class="flex space-x-2 text-gray-400 text-sm">
						<p>300+</p>
					</div>
					<div class="border-t-2"></div>
				</div>
			</div>

			<!-- 2 card -->
			<div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
				<div
					class="text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-green-500 left-4 -top-6"
				>
					<BookCheck class="h-8 w-8" />
				</div>
				<div class="mt-8">
					<p class="text-xl font-semibold my-2">Гирифтани китобҳо</p>
					<div class="flex space-x-2 text-gray-400 text-sm">
						<p>200+</p>
					</div>
					<div class="border-t-2"></div>
				</div>
			</div>

			<!-- 3 card -->
			<div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
				<div
					class="text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6"
				>
					<Info class="h-8 w-8" />
				</div>
				<div class="mt-8">
					<p class="text-xl font-semibold my-2">Маълумот оиди китобҳо</p>
					<div class="flex space-x-2 text-gray-400 text-sm">
						<p>100+</p>
					</div>
					<div class="border-t-2"></div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import {
	BookCheck,
	Info,
	LayoutGrid,
	LibraryBig,
	Power,
	SquareLibrary,
} from 'lucide-vue-next'
</script>
<style>
.text-page  {
	padding: 20px;
}
</style>