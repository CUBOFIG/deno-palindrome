import { assertEquals } from "https://deno.land/std@0.152.0/testing/asserts.ts";
import { reversePalindrome } from './core.ts'

Deno.test("Assert correct Palindrome", ()=>{
  const palindromes = ["civic","lol","level", "radar"] 
  for(const word of palindromes){
    assertEquals(reversePalindrome(word), word)
  }
})
