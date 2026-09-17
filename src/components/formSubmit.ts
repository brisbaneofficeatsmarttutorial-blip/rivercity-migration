export const FORM_SUBMIT_EMAIL = 'rivercity.migration@gmail.com';

export const FORM_SUBMIT_ENDPOINT =
  `https://formsubmit.co/${FORM_SUBMIT_EMAIL}`;

export function submitToEmail(
  formName: string,
  data: Record<string, unknown>
): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      const iframeName = `formsubmit_${Date.now()}`;

      const iframe = document.createElement('iframe');
      iframe.name = iframeName;
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      const form = document.createElement('form');
      form.method = 'POST';
      form.action = FORM_SUBMIT_ENDPOINT;
      form.target = iframeName;
      form.style.display = 'none';

      const payload: Record<string, string> = {
        _subject: `New Rivercity Migration enquiry - ${formName}`,
        _template: 'table',
        _captcha: 'false',
        _replyto: String(data.email || ''),
        _url: window.location.href,
        formType: formName,
      };

      Object.entries(data).forEach(([key, value]) => {
        payload[key] =
          typeof value === 'boolean'
            ? value
              ? 'Yes'
              : 'No'
            : String(value ?? '');
      });

      Object.entries(payload).forEach(([name, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value;
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();

      window.setTimeout(() => {
        form.remove();
        iframe.remove();
        resolve();
      }, 2000);
    } catch (error) {
      reject(error);
    }
  });
}
