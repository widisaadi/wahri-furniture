'use client'

import { supabase } from '@/lib/supabaseClient'
import { useState } from 'react'

type Props = {
    productId: string
    productName: string
}

export default function InquiryForm({ productId, productName }: Props) {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(true)
        setError('')

        const form = e.currentTarget

        const { error } = await supabase.from('inquiries').insert({
            product_id: productId,
            name: (form.elements.namedItem('name') as HTMLInputElement).value,
            email: (form.elements.namedItem('email') as HTMLInputElement).value,
            company: (form.elements.namedItem('company') as HTMLInputElement).value,
            quantity: Number(
                (form.elements.namedItem('quantity') as HTMLInputElement).value
            ),
            message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
        })

        setLoading(false)

        if (error) {
            setError('Something went wrong. Please try again.')
        } else {
            setSuccess(true)
            form.reset()
        }
    }

    // ✅ STATE: SUCCESS
    if (success) {
        return (
            <div className="border rounded-lg p-6 bg-gray-50 border-gray-200">
                <h3 className="text-xl font-semibold mb-2 text-black">
                    Thank you for your inquiry
                </h3>
                <p className="text-gray-600">
                    Our team will review your request and contact you shortly.
                </p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-xl font-semibold text-black">
                Request Quote — {productName}
            </h3>

            {error && (
                <p className="text-red-500 text-sm">{error}</p>
            )}

            <div className="space-y-3">
                <input
                    name="name"
                    required
                    placeholder="Full Name"
                    className="w-full border border-gray-200 bg-white px-4 py-2.5 rounded-lg text-sm transition-focus outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    disabled={loading}
                />

                <input
                    name="email"
                    type="email"
                    required
                    placeholder="Email Address"
                    className="w-full border border-gray-200 bg-white px-4 py-2.5 rounded-lg text-sm transition-focus outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    disabled={loading}
                />

                <div className="grid grid-cols-2 gap-4">
                    <input
                        name="company"
                        placeholder="Company (optional)"
                        className="w-full border border-gray-200 bg-white px-4 py-2.5 rounded-lg text-sm transition-focus outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        disabled={loading}
                    />

                    <input
                        name="quantity"
                        type="number"
                        min="1"
                        required
                        placeholder="Quantity"
                        className="w-full border border-gray-200 bg-white px-4 py-2.5 rounded-lg text-sm transition-focus outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        disabled={loading}
                    />
                </div>

                <textarea
                    name="message"
                    placeholder="Additional details... (e.g. shipping address, specific customizations)"
                    rows={4}
                    className="w-full border border-gray-200 bg-white px-4 py-2.5 rounded-lg text-sm transition-focus outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                    disabled={loading}
                />
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white font-semibold px-6 py-3 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:hover:scale-100 shadow-lg"
            >
                {loading ? 'Sending inquiry...' : 'Send Inquiry'}
            </button>
        </form>
    )
}
