// Google Analytics gtag type declarations
declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config',
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

export {};
