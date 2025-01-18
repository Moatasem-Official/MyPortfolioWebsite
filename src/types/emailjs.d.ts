declare module '@emailjs/browser' {
  interface EmailJSResponseStatus {
    status: number;
    text: string;
  }

  interface SendForm {
    (
      serviceId: string,
      templateId: string,
      parameters: Record<string, unknown>,
      publicKey: string
    ): Promise<EmailJSResponseStatus>;
  }

  const emailjs: {
    init: (publicKey: string) => void;
    send: SendForm;
  };

  export default emailjs;
}
