export const FORM_SUBMIT_EMAIL = 'rivercity.migration@gmail.com';
export const FORM_SUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${FORM_SUBMIT_EMAIL}`;

export async function submitToEmail(formName: string, data: Record<string, unknown>) {
  const payload = {
    _subject: `New Rivercity Migration enquiry — ${formName}`,
    _template: 'table',
    _captcha: 'false',
    _replyto: String(data.email || ''),
    formType: formName,
    ...data,
  };
  const response = await fetch(FORM_SUBMIT_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error('Submission failed');
  return response.json().catch(() => ({}));
}
