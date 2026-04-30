// lib/w3f.ts
export const W3F_ACCESS_KEY =
  (process.env.NEXT_PUBLIC_W3F_KEY as string) || '';

type Payload = Record<string, string>;

export async function sendWeb3Form(payload: Payload) {
  if (!W3F_ACCESS_KEY) {
    throw new Error(
      'Online form is not connected yet. Please call 0469 097 690 or message us on WhatsApp.'
    );
  }

  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: W3F_ACCESS_KEY,
      ...payload,
    }),
  });

  const data = await res.json();
  if (!data?.success) {
    throw new Error(data?.message || 'Submission failed');
  }
  return data;
}
