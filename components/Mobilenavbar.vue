<template>
	<div
		class="fixed hidden bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200"
	>
		<div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
			<button
				type="button"
				class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
			>
				<LayoutGrid
					class="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
				/>
				<span
					class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
					>Асосӣ</span
				>
			</button>
			<DropdownMenu>
				<DropdownMenuTrigger
					class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
					><SquareLibrary
						class="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
					/>
					<span
						class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
						>Китобҳо</span
					></DropdownMenuTrigger
				>
				<DropdownMenuContent>
					<DropdownMenuItem>
						<LibraryBig class="mr-2 h-4 w-4" />
						<span>Каталоги китобҳо</span>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<BookPlus class="mr-2 h-4 w-4" />
						<span>Бақайдгирии китоб</span>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<BookHeadphones class="mr-2 h-4 w-4" />
						<span>Додани китоб</span>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<BookCopy class="mr-2 h-4 w-4" />
						<span>Бозгашти китоб</span>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Calculator class="mr-2 h-4 w-4" />
						<span>Ҳисобдиҳӣ</span>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
			<button
				type="button"
				class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
			>
				<Info
					class="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
				/>
				<span
					class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
					>Маълумот</span
				>
			</button>
			<NuxtLink
				to="/"
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
</template>
<script setup lang="ts">
import {
	BookCopy,
	BookHeadphones,
	BookPlus,
	Calculator,
	Info,
	LayoutGrid,
	LibraryBig,
	Power,
	SquareLibrary,
} from 'lucide-vue-next'
</script>
