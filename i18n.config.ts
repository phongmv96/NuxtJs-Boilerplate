import vi from '~/locales/vi.json'
import en from '~/locales/en.json'
import ko from '~/locales/ko.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  globalInjection: true,
  messages: { vi, en, ko }
}))
