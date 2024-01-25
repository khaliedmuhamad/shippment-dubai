/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        pbg: "var(--pbg)",
        sbg: "var(--sbg)",
        thbg: "var(--thbg)",
        forthbg: "var(--forthbg)",
        fifthbg: "var(--fifthbg)",
        ptxt: "var(--ptxt)",
        stxt: "var(--stxt)",
        thtxt: "var(--thtxt)",
        fotxt: "var(--fotxt)",
        fitxt: "var(--fitxt)",
        hotxt: "var(--hotxt)",
        actxt: "var(--actxt)",
        chtxt: "var(--chtxt)",
        pbor: "var(--pbor)",
        sbor: "var(--sbor)",
        thbor: "var(--thbor)",
        fibor: "var(--fibor)",
        fobor: "var(--fobor)",
        hoor: "var(--hoor)",
        acor: "var(--acor)",
        chor: "var(--chor)"
      },
    },

  },
  plugins: [],
}


