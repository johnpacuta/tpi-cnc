// app/api/forms/pre-installation/route.ts
import { NextResponse } from 'next/server';
import { submitPreInstallationForm } from '@/app/actions/pre-installation';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
    try {
        const fd = await req.formData();
        const result = await submitPreInstallationForm(fd);

        if (!result?.success) {
            return NextResponse.json(result ?? { success: false }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('POST /api/forms/pre-installation failed:', error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}