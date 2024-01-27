import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'

import { EyeIcon } from '@/view/components/icons/EyeIcon'
import AccountCard from './AccountCard'

export default function Accounts() {
  return (
    <div className="bg-emerald-700 rounded-2xl w-full h-full md:p-10 px-4 py-8 flex flex-col">
      <div>
        <span className="tracking-[-0.5px] text-white block">Saldo total</span>

        <div className="flex items-center gap-2">
          <strong className="text-2xl tracking-[-1px] text-white">
            R$ 1000,00
          </strong>

          <button className="w-8 h-8 flex items-center justify-center">
            <EyeIcon open />
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-end">
        <div className="flex items-center justify-between">
          <strong className="text-white tracking-[-1px] text-lg">
            Minhas Contas
          </strong>

          <div>
            <button
              className="py-3 pl-2.5 pr-3.5 rounded-full hover:bg-black/5 transition-colors disabled:opacity-40"
              disabled
            >
              <ChevronLeftIcon className="text-white w-6 h-6" />
            </button>
            <button className="py-3 pl-2.5 pr-3.5 rounded-full hover:bg-black/5 transition-colors">
              <ChevronRightIcon className="text-white w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="mt-4">
          <AccountCard
            color="#7950f2"
            name="Nubank"
            balance={1000}
            type="CASH"
          />
          <AccountCard
            color="#000"
            name="XP"
            balance={1900}
            type="INVESTMENT"
          />
          <AccountCard
            color="#0f0"
            name="Carteira"
            balance={1900}
            type="CASH"
          />
        </div>
      </div>
    </div>
  )
}