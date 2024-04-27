<template>
	<Card class="w-[350px] mx-auto ml-auto mt-60">
		<CardHeader>
			<CardTitle class="text-center">АДМИН</CardTitle>
			<CardDescription class="text-center ml-20">
				<img
					src="../public/лого.png"
					class="w-32 text-center"
				/>
			</CardDescription>
		</CardHeader>
		<CardContent>
			<form @submit.prevent="handleSubmit">
				<div class="grid items-center w-full gap-4">
					<div class="flex flex-col space-y-1.5">
						<div class="relative">
							<input
								type="text"
								class="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
								placeholder="Логин"
								v-model="login"
							/>
							<div
								class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none"
							>
								<Icon
									name="heroicons:user"
									size="20"
									class="flex-shrink-0 size-4 text-gray-500"
								/>
							</div>
						</div>
						<div class="relative">
							<input
								type="password"
								class="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
								placeholder="Рамз"
								v-model="pass"
							/>
							<div
								class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none"
							>
								<Icon
									name="heroicons:lock-closed"
									size="20"
									class="flex-shrink-0 size-4 text-gray-500"
								/>
							</div>
						</div>
						<button
							type="submit"
							class="py-3 px-4 text-center text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
						>
							Воридшавӣ
						</button>
					</div>
				</div>
			</form>
		</CardContent>
	</Card>
</template>
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { ref } from 'vue'
const login = ref('')
const pass = ref('')

const handleSubmit = () => {
	if (login.value == 'admin' && pass.value == 'admin') {
		window.location.href = '/MainPage'
	} else if (login.value == 'book' && pass.value == 'book') {
		window.location.href = '/MainStudent'
	}else if (login.value == 'admin' && pass.value == 'mobile') {
		window.location.href = '/catalog'
	}
}
</script>
