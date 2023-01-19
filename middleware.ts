import { reversePalindrome } from './core.ts'
import { RouterMiddleware } from './deps.ts'

export const PalindromeMiddleware: RouterMiddleware<"/:word"> = (context)=> {
  const word = context.params.word.toLocaleLowerCase()

  const wordReverse = reversePalindrome(word)
  const result = word === wordReverse

  context.response.body = {result, wordReverse} 
}

export const DocsMiddleware: RouterMiddleware<"/"> = (context) => {
  context.response.redirect("https://www.cubo.dev/")
}
