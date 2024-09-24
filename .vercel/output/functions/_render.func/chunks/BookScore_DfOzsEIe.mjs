import { c as createComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_Bho5pH74.mjs';
import { s as setOnSetGetEnv } from './setup_qUz3GmrZ.mjs';

// @ts-check

// used while generating the virtual module
// eslint-disable-next-line @typescript-eslint/no-unused-vars
setOnSetGetEnv((reset) => {
	
});
const SCORE_API_ENDPOINT = "https://www.random.org/integers/?num=1&min=1&max=5&col=1&base=10&format=plain&rnd=new";

const $$BookScore = createComponent(async ($$result, $$props, $$slots) => {
  const res = await fetch(SCORE_API_ENDPOINT);
  const scoreValue = await res.text();
  return renderTemplate`${maybeRenderHead()}<span class="text-xs" id="score">
⭐ Puntuación: ${scoreValue.trim()}/5
</span>`;
}, "G:/repos/ejercicios/front/library-app/src/components/bookScore.astro", void 0);

const $$file = "G:/repos/ejercicios/front/library-app/src/components/bookScore.astro";
const $$url = undefined;

export { $$BookScore as default, $$file as file, $$url as url };
