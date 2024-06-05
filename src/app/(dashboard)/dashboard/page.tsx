'use client'

import React, { useEffect, useState } from 'react'
import { getUserAppointments } from '@/actions/appointment'
import {
  getUserBalance,
  getUserClients,
  getUserPlanInfo,
  getUserTotalProductPrices,
  getUserTransactions,
} from '@/actions/dashboard'
import DashboardCard from '@/components/dashboard/cards'
import { PlanUsage } from '@/components/dashboard/plan-usage'
import InfoBar from '@/components/infobar'
import { Separator } from '@/components/ui/separator'
import CalIcon from '@/icons/cal-icon'
import { DollarSign } from 'lucide-react'
import PersonIcon from '@/icons/person-icon'
import { TransactionsIcon } from '@/icons/transactions-icon'

const DashboardPage = () => {
  const [clients, setClients] = useState<number | null>(null)
  const [sales, setSales] = useState<number | null>(null)
  const [bookings, setBookings] = useState<number | null>(null)
  const [planInfo, setPlanInfo] = useState<{ plan: 'STANDARD' | 'PRO' | 'ULTIMATE'; credits: number; domains: number } | null>(null)
  const [transactions, setTransactions] = useState<any[]>([])
  const [products, setProducts] = useState<number | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const clientsData = await getUserClients()
      const salesData = await getUserBalance()
      const bookingsData = await getUserAppointments()
      const planData = await getUserPlanInfo()
      const transactionsData = await getUserTransactions()
      const productsData = await getUserTotalProductPrices()

      setClients(clientsData ?? null)
      setSales(salesData ?? null)
      setBookings(bookingsData ?? null)

      if (planData && planData.plan && ['STANDARD', 'PRO', 'ULTIMATE'].includes(planData.plan)) {
        setPlanInfo(planData as { plan: 'STANDARD' | 'PRO' | 'ULTIMATE'; credits: number; domains: number })
      } else {
        setPlanInfo({ plan: 'STANDARD', credits: 0, domains: 0 })
      }

      setTransactions(transactionsData?.data || [])
      setProducts(productsData ?? null)
    }

    fetchData()
  }, [])

  return (
    <>
      <InfoBar />
      <div className="overflow-y-auto w-full flex-1 h-0 px-2 sm:px-2">
        <div className="flex flex-wrap gap-5">
          <DashboardCard
            value={clients || 0}
            title="Potential Clients"
            icon={<PersonIcon />}
          />
          <DashboardCard
            value={(products || 0) * (clients || 0)}
            sales
            title="Pipeline Value"
            icon={<DollarSign />}
          />
          <DashboardCard
            value={bookings || 0}
            title="Appointments"
            icon={<CalIcon />}
          />
          <DashboardCard
            value={sales || 0}
            sales
            title="Total Sales"
            icon={<DollarSign />}
          />
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 py-10 gap-10">
          <div>
            <div className="mb-5">
              <h2 className="font-bold text-2xl">Plan Usage</h2>
              <p className="text-sm font-light">
                A detailed overview of your metrics, usage, customers and more
              </p>
            </div>
            <PlanUsage
              plan={planInfo?.plan || 'STANDARD'}
              credits={planInfo?.credits || 0}
              domains={planInfo?.domains || 0}
              clients={clients || 0}
            />
          </div>
          <div className="flex flex-col">
            <div className="w-full flex justify-between items-start mb-5">
              <div className="flex gap-3 items-center">
                <TransactionsIcon />
                <p className="font-bold">Recent Transactions</p>
              </div>
              <p className="text-sm cursor-pointer">See more</p>
            </div>
            <Separator orientation="horizontal" />
            {transactions.map((transaction) => (
              <div
                className="flex flex-col sm:flex-row gap-3 w-full justify-between items-center border-b-2 py-5"
                key={transaction.id}
              >
                <p className="font-bold text-center sm:text-left">
                  {transaction.calculated_statement_descriptor}
                </p>
                <p className="font-bold text-xl text-center sm:text-right">
                  ${transaction.amount / 100}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardPage
