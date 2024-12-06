// FILE: app/api/revalidate/route.ts
import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export async function POST() {
    try {
        revalidatePath('/')
        return NextResponse.json({ revalidated: true, now: Date.now() })
    } catch (err) {
        console.error(err)
        return NextResponse.json({ revalidated: false })
    }
}