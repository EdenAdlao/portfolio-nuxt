import { Award, House, SquareCode, UserRound } from '@lucide/vue'

export const navItems = [
  {
    label: 'HOME',
    path: '/',
    active: 'text-[#fbcabb] drop-shadow-[0_0_10px_rgba(251,202,187,0.9)]',
    hover: 'hover:text-[#fbcabb] hover:drop-shadow-[0_0_10px_rgba(251,202,187,0.9)]',
    icon: House
  },
  {
    label: 'ABOUT',
    path: '/about',
    active: 'text-[#edabc9] drop-shadow-[0_0_10px_rgba(237,171,201,0.9)]',
    hover: 'hover:text-[#edabc9] hover:drop-shadow-[0_0_10px_rgba(237,171,201,0.9)]',
    icon: UserRound
  },
  {
    label: 'STACK',
    path: '/stack',
    active: 'text-[#d3c8e3] drop-shadow-[0_0_10px_rgba(211,200,227,0.9)]',
    hover: 'hover:text-[#d3c8e3] hover:drop-shadow-[0_0_10px_rgba(211,200,227,0.9)]',
    icon: SquareCode
  },
  {
    label: 'CERTIFICATIONS',
    path: '/certifications',
    active: 'text-[#9ec9ec] drop-shadow-[0_0_10px_rgba(158,201,236,0.9)]',
    hover: 'hover:text-[#9ec9ec] hover:drop-shadow-[0_0_10px_rgba(158,201,236,0.9)]',
    icon: Award
  }
]