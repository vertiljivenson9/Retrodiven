class OSKernel {
  private static instance: OSKernel;
  public static getInstance(): OSKernel {
    if (!OSKernel.instance) OSKernel.instance = new OSKernel();
    return OSKernel.instance;
  }
  public generateId() { return 'vpx-' + Math.random().toString(36).substring(2, 9); }
  public saveSystemConfig(config: any) { localStorage.setItem('VERTIL_SYSTEM_CONFIG_JSON', JSON.stringify(config)); }
  public getSystemConfig() { return JSON.parse(localStorage.getItem('VERTIL_SYSTEM_CONFIG_JSON') || 'null'); }
}
export const kernel = OSKernel.getInstance();