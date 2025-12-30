import { SystemFile } from '../types';
class OSKernel {
  private static instance: OSKernel;
  public static getInstance() { if(!OSKernel.instance) OSKernel.instance = new OSKernel(); return OSKernel.instance; }
  public saveConfig(config: any) { localStorage.setItem('VERTIL_CONFIG', JSON.stringify(config)); }
  public getConfig() { return JSON.parse(localStorage.getItem('VERTIL_CONFIG') || 'null'); }
  public generateId() { return 'vpx-' + Math.random().toString(36).substring(2, 9); }
  public downloadKey(name: string) {
    const blob = new Blob([name.trim()], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'IDENTITY_KEY.txt'; a.click();
  }
}
export const kernel = OSKernel.getInstance();