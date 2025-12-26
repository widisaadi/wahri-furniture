'use client'

import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Inquiries from './Inquiries'

export default function AdminPage() {
    const router = useRouter()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [user, setUser] = useState<any>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getUser() {
            const { data: { session }, error } = await supabase.auth.getSession()
            if (error || !session) {
                router.push('/admin/login')
            } else {
                setUser(session.user)
                setLoading(false)
            }
        }
        getUser()
    }, [router])

    if (loading) {
        return <div className="p-10">Loading...</div>
    }

    if (!user) return null

    return (
        <main className="p-10 max-w-7xl mx-auto">
            <header className="mb-8 flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-semibold">
                        Inquiries
                    </h1>
                    <p className="text-gray-500">
                        Incoming requests from potential buyers
                    </p>
                </div>
                <button
                    onClick={async () => {
                        await supabase.auth.signOut()
                        router.push('/admin/login')
                    }}
                    className="text-sm text-red-500 hover:underline"
                >
                    Sign out
                </button>
            </header>

            <Inquiries />
        </main>
    )
}
