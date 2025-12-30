class OSKernel {
  private static instance: OSKernel;
  public static getInstance(): OSKernel { if (!OSKernel.instance) OSKernel.instance = new OSKernel(); return OSKernel.instance; }
  public saveSystemConfig(config: any) { localStorage.setItem('VERTIL_SYSTEM_CONFIG_JSON', JSON.stringify(config)); }
  public getSystemConfig() { return JSON.parse(localStorage.getItem('VERTIL_SYSTEM_CONFIG_JSON') || 'null'); }
  public generateId() { return 'vpx-' + Math.random().toString(36).substring(2, 9); }
  public downloadIdentityDisk(password: string) {
    const blob = new Blob([password], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'IDENTITY_KEY.txt'; a.click();
  }
}
export const kernel = OSKernel.getInstance();