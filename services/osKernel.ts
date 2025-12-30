class OSKernel {
  private static instance: OSKernel;
  public static getInstance() { if (!OSKernel.instance) OSKernel.instance = new OSKernel(); return OSKernel.instance; }
  public saveSystemConfig(config: any) { localStorage.setItem('VERTIL_SYSTEM_CONFIG_JSON', JSON.stringify(config)); }
  public getSystemConfig() { return JSON.parse(localStorage.getItem('VERTIL_SYSTEM_CONFIG_JSON') || 'null'); }
  public generateId() { return 'vpx-' + Math.random().toString(36).substring(2, 9); }
  public downloadIdentityDisk(password: string) {
    const blob = new Blob([password.trim()], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'IDENTITY_KEY.txt'; a.click();
  }
  public verifyIntegrity2D(code: string) {
    const forbidden = ['webgl', 'three.js', 'gpu'];
    const found = forbidden.filter(w => code.toLowerCase().includes(w));
    return { valid: found.length === 0, logs: found.map(w => "[BLOCKED] Forbidden: " + w) };
  }
}
export const kernel = OSKernel.getInstance();