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
		<h1 class="ml-12 text-ellipsis font-semibold text-xl">Саҳифаи ҳисобдиҳӣ</h1>
	</div>
	<!-- Invoice -->
	<div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10">
		<div class="sm:w-11/12 lg:w-3/4 mx-auto">
			<!-- Card -->
			<div
				class="flex flex-col p-4 sm:p-10 bg-white shadow-md rounded-xl dark:bg-neutral-800"
			>
				<!-- Grid -->
				<div class="flex justify-between">
					<div>
						<img src="./лого.png" class="size-32" />
					</div>
					<!-- Col -->

					<div class="text-end">
						<h2
							class="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-neutral-200"
						>
							Ҳисобнома #
						</h2>
						<span class="mt-1 block text-gray-500 dark:text-neutral-500"
							>3682303</span
						>

						<address
							class="mt-4 not-italic text-gray-800 dark:text-neutral-200"
						>
							Суроғаи мо: 43 микрорайон<br />
						</address>
					</div>
					<!-- Col -->
				</div>
				<!-- End Grid -->

				<!-- Grid -->
				<div class="mt-8 grid sm:grid-cols-2 gap-3">
					<div class="sm:text-end space-y-2">
						<!-- Grid -->
						<div class="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
							<dl class="grid sm:grid-cols-5 gap-x-3">
								<dt
									class="col-span-3 font-semibold text-gray-800 dark:text-neutral-200"
								>
									Санаи ҳисобнома:
								</dt>
								<dd class="col-span-2 text-gray-500 dark:text-neutral-500">
									03/10/2018
								</dd>
							</dl>
							<dl class="grid sm:grid-cols-5 gap-x-3">
								<dt
									class="col-span-3 font-semibold text-gray-800 dark:text-neutral-200"
								>
									Муҳлати ҳисобнома:
								</dt>
								<dd class="col-span-2 text-gray-500 dark:text-neutral-500">
									03/11/2018
								</dd>
							</dl>
						</div>
						<!-- End Grid -->
					</div>
					<!-- Col -->
				</div>
				<!-- End Grid -->

				<!-- Table -->
				<!-- <div class="mt-6">
					<div
						class="border border-gray-200 p-4 rounded-lg space-y-4 dark:border-neutral-700"
					>
						<div class="hidden sm:grid sm:grid-cols-5">
							<div
								class="sm:col-span-2 text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
							>
								Item
							</div>
							<div
								class="text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
							>
								Qty
							</div>
							<div
								class="text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
							>
								Rate
							</div>
							<div
								class="text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
							>
								Amount
							</div>
						</div>

						<div
							class="hidden sm:block border-b border-gray-200 dark:border-neutral-700"
						></div>

						<div class="grid grid-cols-3 sm:grid-cols-5 gap-2">
							<div class="col-span-full sm:col-span-2">
								<h5
									class="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
								>
									Item
								</h5>
								<p class="font-medium text-gray-800 dark:text-neutral-200">
									Design UX and UI
								</p>
							</div>
							<div>
								<h5
									class="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
								>
									Qty
								</h5>
								<p class="text-gray-800 dark:text-neutral-200">1</p>
							</div>
							<div>
								<h5
									class="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
								>
									Rate
								</h5>
								<p class="text-gray-800 dark:text-neutral-200">5</p>
							</div>
							<div>
								<h5
									class="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
								>
									Amount
								</h5>
								<p class="sm:text-end text-gray-800 dark:text-neutral-200">
									$500
								</p>
							</div>
						</div>

						<div
							class="sm:hidden border-b border-gray-200 dark:border-neutral-700"
						></div>

						<div class="grid grid-cols-3 sm:grid-cols-5 gap-2">
							<div class="col-span-full sm:col-span-2">
								<h5
									class="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
								>
									Item
								</h5>
								<p class="font-medium text-gray-800 dark:text-neutral-200">
									Web project
								</p>
							</div>
							<div>
								<h5
									class="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
								>
									Qty
								</h5>
								<p class="text-gray-800 dark:text-neutral-200">1</p>
							</div>
							<div>
								<h5
									class="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
								>
									Rate
								</h5>
								<p class="text-gray-800 dark:text-neutral-200">24</p>
							</div>
							<div>
								<h5
									class="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
								>
									Amount
								</h5>
								<p class="sm:text-end text-gray-800 dark:text-neutral-200">
									$1250
								</p>
							</div>
						</div>

						<div
							class="sm:hidden border-b border-gray-200 dark:border-neutral-700"
						></div>

						<div class="grid grid-cols-3 sm:grid-cols-5 gap-2">
							<div class="col-span-full sm:col-span-2">
								<h5
									class="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
								>
									Item
								</h5>
								<p class="font-medium text-gray-800 dark:text-neutral-200">
									SEO
								</p>
							</div>
							<div>
								<h5
									class="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
								>
									Qty
								</h5>
								<p class="text-gray-800 dark:text-neutral-200">1</p>
							</div>
							<div>
								<h5
									class="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
								>
									Rate
								</h5>
								<p class="text-gray-800 dark:text-neutral-200">6</p>
							</div>
							<div>
								<h5
									class="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
								>
									Amount
								</h5>
								<p class="sm:text-end text-gray-800 dark:text-neutral-200">
									$2000
								</p>
							</div>
						</div>
					</div>
				</div> -->
				<!-- End Table -->

				<!-- Flex -->
				<div class="mt-8 flex sm:justify-end">
					<div class="w-full max-w-2xl sm:text-end space-y-2">
						<!-- Grid -->
						<div class="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
							<dl class="grid sm:grid-cols-5 gap-x-3">
								<dt
									class="col-span-3 font-semibold text-gray-800 dark:text-neutral-200"
								>
									Миқдори китобҳо:
								</dt>
								<dd class="col-span-2 text-gray-500 dark:text-neutral-500">
									100
								</dd>
							</dl>

							<dl class="grid sm:grid-cols-5 gap-x-3">
								<dt
									class="col-span-3 font-semibold text-gray-800 dark:text-neutral-200"
								>
									Нарх:
								</dt>
								<dd class="col-span-2 text-gray-500 dark:text-neutral-500">
									1250.00 сомонӣ
								</dd>
							</dl>
						</div>
						<!-- End Grid -->
					</div>
				</div>
				<!-- End Flex -->

				<div class="mt-8 sm:mt-12">
					<!-- <h4 class="text-lg font-semibold text-gray-800 dark:text-neutral-200">
						Thank you!
					</h4>
					<p class="text-gray-500 dark:text-neutral-500">
						If you have any questions concerning this invoice, use the following
						contact information:
					</p> -->
					<div class="mt-2">
						<p
							class="block text-sm font-medium text-gray-800 dark:text-neutral-200"
						>
							Сомонаи мо:
						</p>
						<p
							class="block text-sm font-medium text-gray-800 dark:text-neutral-200"
						>
							Тамос: x
						</p>
					</div>
				</div>

				<p class="mt-5 text-sm text-gray-500 dark:text-neutral-500">© 2024.</p>
			</div>
			<!-- End Card -->

			<!-- Buttons -->
			<div class="mt-6 flex justify-end gap-x-3">
				<a
					class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-neutral-800 dark:hover:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
					href="#"
				>
					<Upload class="flex-shrink-0 size-4" />
					Формати PDF
				</a>
				<a
					class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
					href="#"
				>
					<Printer class="flex-shrink-0 size-4" />
					Чоп
				</a>
			</div>
			<!-- End Buttons -->
		</div>
	</div>
	<!-- End Invoice -->
</template>
<script setup lang="ts">
import {
	ChevronLeft,
	Info,
	LayoutGrid,
	LibraryBig,
	Power,
	Printer,
	Upload,
} from 'lucide-vue-next'
</script>
