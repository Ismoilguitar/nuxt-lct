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
		<NuxtLink to="/catalog/BookCatalog">
			<ChevronLeft class="text-blue-400" />
		</NuxtLink>
		<h1 class="ml-12 text-ellipsis font-semibold text-xl">
			Саҳифаи бақайдгирӣ
		</h1>
	</div>
	<!-- Card Section -->
	<div class="max-w-4xl -mt-8 px-4 py-10 sm:px-6 lg:px-8 mx-auto">
		<!-- Card -->
		<div class="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-800">
			<div class="mb-8">
				<h2 class="text-xl font-bold text-gray-800 dark:text-neutral-200">
					Бақайдгирии китобҳо
				</h2>
				<p class="text-sm text-gray-600 dark:text-neutral-400">
					Ҳоҳишмандем тамоми маълумотҳоро ворид намоед
				</p>
			</div>

			<form>
				<!-- Grid -->
				<div class="grid sm:grid-cols-12 gap-2 sm:gap-6">
					<div class="sm:col-span-3">
						<label
							class="inline-block text-sm text-gray-800 dark:text-neutral-200"
						>
							Расм
						</label>
					</div>
					<!-- End Col -->

					<div class="sm:col-span-9">
						<div class="flex items-center gap-5">
							<img
								class="inline-block size-16 rounded-full ring-2 ring-white dark:ring-neutral-900"
								src=""
								alt="Расм"
							/>
							<div class="flex gap-x-2">
								<div>
									<button
										type="button"
										class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
									>
										<Upload class="flex-shrink-0 size-4" />
										Иловаи расм
									</button>
								</div>
							</div>
						</div>
					</div>
					<!-- End Col -->

					<div class="sm:col-span-3">
						<label
							for="af-account-full-name"
							class="inline-block text-sm text-gray-800 dark:text-neutral-200"
						>
							Номи китоб
						</label>
					</div>
					<!-- End Col -->

					<div class="sm:col-span-3">
						<div class="sm:flex">
							<input
								id="af-account-full-name"
								type="text"
								class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
								placeholder="Номи китоб"
							/>
						</div>
					</div>
					<!-- End Col -->

					<div class="sm:col-span-3">
						<label
							class="inline-block text-sm text-gray-800 dark:text-neutral-200"
						>
							Соли нашр
						</label>
					</div>
					<!-- End Col -->

					<div class="sm:col-span-9">
						<input
							type="text"
							class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
							placeholder="Соли нашр"
						/>
					</div>
					<!-- End Col -->
					<div class="sm:col-span-3">
						<label
							class="inline-block text-sm text-gray-800 dark:text-neutral-200"
						>
							Муаллиф
						</label>
					</div>
					<!-- End Col -->

					<div class="sm:col-span-9">
						<input
							type="text"
							class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
							placeholder="Муаллиф"
						/>
					</div>
					<!-- End Col -->
					<div class="sm:col-span-3">
						<label
							class="inline-block text-sm text-gray-800 dark:text-neutral-200"
						>
							Санаи бақайдгирӣ
						</label>
					</div>
					<!-- End Col -->
					<div class="sm:col-span-9">
						<input
							type="datetime-local"
							class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
							placeholder="Санаи бақайдгирӣ"
						/>
					</div>
					<!-- End Col -->
					<div class="sm:col-span-3">
						<label
							class="inline-block text-sm text-gray-800 dark:text-neutral-200"
						>
							Миқдор
						</label>
					</div>
					<div class="sm:col-span-9">
						<input
							type="text"
							class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
							placeholder="Миқдор"
						/>
					</div>
					<!-- End Col -->
				</div>
				<!-- End Grid -->

				<div class="-mt-10 flex justify-end gap-x-2">
					<NuxtLink
						to="/catalog/BookCatalog"
						type="button"
						class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
					>
						<ChevronLeft />
						Баргаштан
					</NuxtLink>
					<button
						type="button"
						class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
					>
						Иловаи китоб
						<BookPlus />
					</button>
				</div>
			</form>
		</div>
		<!-- End Card -->
	</div>
	<!-- End Card Section -->
	<br /><br />
</template>
<script setup lang="ts">
import {
	BookPlus,
	ChevronLeft,
	Info,
	LayoutGrid,
	LibraryBig,
	Power,
	Upload,
} from 'lucide-vue-next'
</script>
