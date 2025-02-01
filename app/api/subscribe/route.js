import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save to your database
    // 2. Add to your email marketing service (e.g., Mailchimp, SendGrid)
    // For now, we'll just simulate success

    // Example using a database (you'll need to implement this):
    // await prisma.subscriber.create({
    //   data: { email }
    // });

    return NextResponse.json(
      { message: 'Subscription successful' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
} 