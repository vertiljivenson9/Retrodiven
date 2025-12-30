class SoundService {
  private static instance: SoundService;
  public static getInstance(): SoundService { if (!SoundService.instance) SoundService.instance = new SoundService(); return SoundService.instance; }
  public playClick() { new Audio("https://actions.google.com/sounds/v1/foley/mechanical_switch_single_click.ogg").play().catch(() => {}); }
  public playAppOpen() { new Audio("https://actions.google.com/sounds/v1/science_fiction/beep_acknowledge.ogg").play().catch(() => {}); }
  public playError() { new Audio("https://actions.google.com/sounds/v1/alarms/beep_short.ogg").play().catch(() => {}); }
}
export const soundService = SoundService.getInstance();