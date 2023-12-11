import { useI18n } from 'vue-i18n'
export const useI18 = (key: string) => useI18n().t(key)
