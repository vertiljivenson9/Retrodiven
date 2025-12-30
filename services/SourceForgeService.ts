export class SourceForgeService {
  private static instance: SourceForgeService;
  public static getInstance() { if(!SourceForgeService.instance) SourceForgeService.instance = new SourceForgeService(); return SourceForgeService.instance; }
  public async checkConnection(token: string, repo: string) {
    const res = await fetch(`https://api.github.com/repos/${repo}`, { headers: { 'Authorization': `token ${token}` } });
    return res.ok;
  }
  public async deployFile(file: any, token: string, repo: string) {
    const url = `https://api.github.com/repos/${repo}/contents/${file.path}${file.name}`;
    const check = await fetch(url, { headers: { 'Authorization': `token ${token}` } });
    let sha = ""; if (check.ok) { const d = await check.json(); sha = d.sha; }
    const res = await fetch(url, {
      method: 'PUT',
      headers: { 'Authorization': `token ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Neural Mesh Update', content: btoa(unescape(encodeURIComponent(file.content))), sha: sha || undefined })
    });
    return { success: res.ok, message: res.ok ? "OK" : "FAIL" };
  }
}
export const soundService = SoundService.getInstance();