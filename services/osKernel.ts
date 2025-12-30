import { SystemFile, AppConfig } from '../types';

class OSKernel {
  private static instance: OSKernel;
  private REGISTRY_KEY = 'VERTIL_SYSTEM_CONFIG_JSON';

  public static getInstance(): OSKernel {
    if (!OSKernel.instance) OSKernel.instance = new OSKernel();
    return OSKernel.instance;
  }

  public saveSystemConfig(config: any) {
    const current = this.getSystemConfig() || {};
    localStorage.setItem(this.REGISTRY_KEY, JSON.stringify({ ...current, ...config }));
  }

  public getSystemConfig(): any | null {
    const data = localStorage.getItem(this.REGISTRY_KEY);
    return data ? JSON.parse(data) : null;
  }

  public generateId() { return 'vpx-' + Math.random().toString(36).substring(2, 9); }
  
  public verifyIntegrity2D(code: string) {
    const forbidden = ['webgl', 'three.js', 'babylon', 'gpu'];
    const found = forbidden.filter(word => code.toLowerCase().includes(word));
    return { valid: found.length === 0, logs: found.length > 0 ? [`Forbidden call: ${found.join(',')}`] : ["Security OK"] };
  }

  public downloadIdentityDisk(password: string) {
    const blob = new Blob([password], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'IDENTITY_KEY.txt'; a.click();
  }
}
export const kernel = OSKernel.getInstance();