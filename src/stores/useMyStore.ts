export const useMyStore = defineStore('My', () => {
  const myName = ref<string>('David Teo')
  const getName = computed(() => myName.value)
  const updateName = (newName: string) => (myName.value = newName)
  return { getName, updateName }
})
