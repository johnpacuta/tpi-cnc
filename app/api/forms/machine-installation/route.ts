import { NextResponse } from 'next/server';
import { submitPreInstallationForm } from '@/app/actions/pre-installation';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
    try {
        const fd = await req.formData();
        const result = await submitMachineAcceptanceForm(fd);

        if (!result?.success) {
      console.error('submitMachineAcceptanceForm failed:', result);
      return NextResponse.json(result ?? { success: false }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('POST /api/forms/machine-acceptance crashed:', error?.message);
    console.error('POST /api/forms/machine-acceptance error object:', error);
    return NextResponse.json(
      { success: false, error: error?.message ?? 'Internal Server Error' },
      { status: 500 }
    );
  }
}