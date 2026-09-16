export const FORM_SUBMIT_EMAIL = 'rivercity.migration@gmail.com';
export const FORM_SUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${FORM_SUBMIT_EMAIL}`;

export async function submitToEmail(formName: string, data: Record<string, unknown>) {
  const payload: Record<string, string> = {
    _subject: `New Rivercity Migration enquiry — ${formName}`,
    _template: 'table',
    _captcha: 'false',
    _replyto: String(data.email || ''),
    _url: window.location.href,
    formType: formName,
  };

  Object.entries(data).forEach(([key, value]) => {
    payload[key] =
      typeof value === 'boolean' ? (value ? 'Yes' : 'No') : String(value ?? '');
  });

  const body = new URLSearchParams(payload);

  const response = await fetch(FORM_SUBMIT_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      Accept: 'application/json',
    },
    body: body.toString(),
  });

  let result: any = {};
  try {
    result = await response.json();
  } catch {
    // FormSubmit may return an empty/non-JSON response on some failures.
  }

  if (!response.ok || result?.success === false) {
    throw new Error(result?.message || `Submission failed (${response.status})`);
  }

  return result;
}
