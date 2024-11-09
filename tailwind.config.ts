import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'gray-1':'rgba(255, 255, 255, 0.2)',
        'gray-2':'rgba(255, 255, 255, 0.4)',
        'orange':'#FA8B02',
        'black-1':'#333333',
        'gray-3':'rgba(239, 239, 239, 1)',
        'pink-1':'rgba(255, 255, 255, 0.3)',
        'EFEFEF':'#EFEFEF',
        'white-1':'rgba(255, 255, 255, 1)',
        'bg-black':'rgba(0, 0, 0, 0.5)',
        'gg':'rgba(51, 51, 51, 0.2)'
      }, 
       padding: {
        '250': '250px',
        'p2':"7px",
        '120':'120px',
        '30':'30px',
        '15':'15px',
        '33':'33px',
        '59':'59px',
       
       
      },
      margin:{ 
        '60':'60px',
        '250': '250px',
        '30':'30px',
        
      },
      inset: {
        '73': '18.7rem',
        '65':'16.8rem',
        '167':'167.25rem',
        '77':'77.69rem', 
        'bo':'-120px',
        '100':'450px',
        'boo':'-140px',
        '51':'60%',
        '22':'-2px',
        '203':'203px',
        '716':'716px'


       },
      borderRadius: {
        '50': '50px',
       }, 
       width: {
        '50': '50px',
        "404":"404px",
        '700':'700px',
        '450':'450px',
        '427':'427px',
        '569':'569px',
        '212':'212px',
        '734':"734px",
        '318':"318px",
        '724':"724px",
        '340':'340px',
        '290':'290px',
        '280':'280px',
        '292':'292.5px',
        '488':'488px'
      },
      height: {
        '50': '50px',
        "404":"404px",
        "592":"592px",
        "600":"600px",
        '330':'330px',
        '47':'47px',
        '450':'450px',
        '448':'448px',
        '542':'542px',
        '809':'809px',
        '228':'228px',
        '55': '55px',
        '189':'189px',
        '674':'674px',
      }, 
       fontSize: {
         '32':'32px'
      },
      backgroundImage: {
        'Special': "url('/img/bg-pink.png')",
      
      }
    },
  },
  plugins: [],
};
export default config;
