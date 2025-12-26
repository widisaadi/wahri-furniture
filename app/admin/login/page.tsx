'use client'

import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function AdminLoginPage() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(true)
        setError('')

        const form = e.currentTarget
        const email = (form.elements.namedItem('email') as HTMLInputElement).value
        const password = (form.elements.namedItem('password') as HTMLInputElement).value

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        setLoading(false)

        if (error) {
            setError(error.message)
        } else {
            router.push('/admin')
        }
    }

    return (
        <main className="min-h-screen flex items-center justify-center">
            <form
                onSubmit={handleLogin}
                className="w-full max-w-sm space-y-4 border p-6"
            >
                <h1 className="text-2xl font-bold text-center">
                    Admin Login
                </h1>

                {error && (
                    <p className="text-red-500 text-sm">
                        {error}
                    </p>
                )}

                <input
                    name="email"
                    type="email"
                    placeholder="Admin Email"
                    required
                    className="w-full border px-3 py-2"
                />

                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    className="w-full border px-3 py-2"
                />

                <button
                    disabled={loading}
                    className="w-full bg-black text-white py-2"
                >
                    {loading ? 'Signing in...' : 'Login'}
                </button>
            </form>
        </main>
    )
}
