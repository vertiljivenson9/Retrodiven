const CLICK_SOUND = "https://actions.google.com/sounds/v1/foley/mechanical_switch_single_click.ogg";
const APP_OPEN_SOUND = "https://actions.google.com/sounds/v1/science_fiction/beep_acknowledge.ogg";

class SoundService {
  private static instance: SoundService;
  public static getInstance(): SoundService {
    if (!SoundService.instance) SoundService.instance = new SoundService();
    return SoundService.instance;
  }
  public playClick() { new Audio(CLICK_SOUND).play().catch(() => {}); }
  public playAppOpen() { new Audio(APP_OPEN_SOUND).play().catch(() => {}); }
  public playError() { console.error("Sound Error"); }
}
export const soundService = SoundService.getInstance();