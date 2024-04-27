<template>
	<nav
		class="none z-50 w-full hidden bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
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
							src="../public/лого.png"
							class="h-8 me-3"
							alt="FlowBite Logo"
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
										to="/returnbookpage"
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
			<div class="p-1">
				<p class="text-xl font-semibold">Саҳифаи китобҳо</p>
			</div>
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
								<NuxtLink to="/givebookpage" class="ml-[70%]"
									><Button variant="primarys">
										Бакайдгирӣ
										<BookUser />
									</Button>
								</NuxtLink>
							</div>
							<div class="overflow-hidden">
								<table
									class="max-w-[350px] divide-y divide-gray-200 dark:divide-gray-700"
								>
									<thead class="bg-gray-50 dark:bg-gray-700">
										<tr>
											<!-- <th scope="col" class="py-3 px-4 pe-0">
												<div class="flex items-center h-5">
													<input
														id="hs-table-pagination-checkbox-all"
														type="checkbox"
														class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
													/>
													<label
														for="hs-table-pagination-checkbox-all"
														class="sr-only"
														>Checkbox</label
													>
												</div>
											</th> -->
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
												Амалҳо
											</th>
										</tr>
									</thead>
									<tbody
										class="divide-y divide-gray-200 dark:divide-gray-700"
										v-if="book.length > 0"
									>
										<tr v-for="(data, index) in filteredItems" :key="index">
											<!-- <td class="py-3 ps-4">
												<div class="flex items-center h-5">
													<input
														id="hs-table-pagination-checkbox-1"
														type="checkbox"
														class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
													/>
													<label
														for="hs-table-pagination-checkbox-1"
														class="sr-only"
														>Checkbox</label
													>
												</div>
											</td> -->
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
												class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium"
											>
												<!-- <NuxtLink :to="`/readbook/${data.id}`">
													<Button variant="primaryblue"
														><Icon name="heroicons:eye"
													/></Button>
												</NuxtLink>
												<NuxtLink :to="`/update/${data.id}`">
													<Button variant="successgreen"
														><Icon name="heroicons:pencil-square"
													/></Button>
												</NuxtLink>

												<Button
													variant="destructive"
													@click="handleDelete(data.id)"
													><Icon name="heroicons:trash"
												/></Button> -->
												<DropdownMenu>
													<DropdownMenuTrigger>
														<Button variant="primaryblue"
															><Icon name="heroicons:ellipsis-vertical"
														/></Button>
													</DropdownMenuTrigger>
													<DropdownMenuGroup>
														<DropdownMenuContent>
															<DropdownMenuSeparator />
															<DropdownMenuItem>
																<NuxtLink
																	:to="`/givebookread/${data.id}`"
																	class="flex"
																>
																	<Eye class="mr-2 h-4 w-4 text-gray-600" />
																	Дидан
																</NuxtLink>
															</DropdownMenuItem>
															<DropdownMenuItem>
																<NuxtLink
																	:to="`/giveupdatebook/${data.id}`"
																	class="flex"
																>
																	<SquarePen
																		class="mr-2 h-4 w-4 text-gray-600"
																	/>
																	Таҳрир
																</NuxtLink>
															</DropdownMenuItem>
															<DropdownMenuItem>
																<button
																	@click="handleDelete(data.id)"
																	class="cursor-pointer flex"
																>
																	<Trash class="mr-2 h-4 w-4 text-gray-600" />
																	Несткунӣ
																</button>
															</DropdownMenuItem>
														</DropdownMenuContent>
													</DropdownMenuGroup>
												</DropdownMenu>
												<Toaster />
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
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Toaster } from '@/components/ui/toast'
import { useToast } from '@/components/ui/toast/use-toast'
import axios from 'axios'
import { BookUser, Eye, SquarePen, Trash } from 'lucide-vue-next'

import { computed, onMounted, ref } from 'vue'
const expanded = ref(false)
const active = ref(false)
const closeMenu = ref(false)
const book = ref([])
const speciality = ref('')
console.log('sortby', speciality.value)
const booksItemSearch = ref('')
const { toast } = useToast()
const setExpanded = () => {
	expanded.value = !expanded.value
}
const openMenu = () => {
	closeMenu.value = !closeMenu.value
}
const fetchData = async () => {
	try {
		const response = await axios.get('http://localhost:8181/givebookread')
		book.value = response.data.rows
	} catch (err) {
		console.log(err)
	}
}
const handleDelete = id => {
	axios.delete(`http://localhost:8181/deletegivebook/${id}`).then(res => {
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
