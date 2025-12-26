'use client'

import { supabase } from '@/lib/supabaseClient'
import { useEffect, useState } from 'react'

type Inquiry = {
    id: string
    name: string
    email: string
    company: string | null
    quantity: number | null
    message: string | null
    created_at: string
    products?: {
        name: string
    }
}

export default function Inquiries() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [data, setData] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function load() {
            const { data } = await supabase
                .from('inquiries')
                .select(`
          id,
          name,
          email,
          company,
          quantity,
          message,
          created_at,
          products(name)
        `)
                .order('created_at', { ascending: false })

            setData(data || [])
            setLoading(false)
        }

        load()
    }, [])

    if (loading) {
        return <p className="text-gray-500">Loading inquiries...</p>
    }

    return (
        <div className="overflow-x-auto border rounded-lg">
            <table className="min-w-full text-sm">
                <thead className="bg-gray-50 text-left">
                    <tr>
                        <th className="px-4 py-3">Name</th>
                        <th className="px-4 py-3">Company</th>
                        <th className="px-4 py-3">Product</th>
                        <th className="px-4 py-3">Qty</th>
                        <th className="px-4 py-3">Email</th>
                        <th className="px-4 py-3">Date</th>
                    </tr>
                </thead>

                <tbody className="divide-y">
                    {data.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-medium">
                                {item.name}
                            </td>

                            <td className="px-4 py-3 text-gray-600">
                                {item.company || '-'}
                            </td>

                            <td className="px-4 py-3">
                                {item.products?.name || '-'}
                            </td>

                            <td className="px-4 py-3">
                                {item.quantity || '-'}
                            </td>

                            <td className="px-4 py-3 text-gray-600">
                                {item.email}
                            </td>

                            <td className="px-4 py-3 text-gray-500">
                                {new Date(item.created_at).toLocaleDateString()}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
