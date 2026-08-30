export type ConversionKind = 'booking' | 'whatsapp' | 'phone';

export const CAL_BASE_URL = 'https://cal.com/tourma-line';

const normalizeToken = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/^\/+|\/+$/g, '')
    .replace(/\//g, '_')
    .replace(/[^a-z0-9_-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^[-_]+|[-_]+$/g, '');

export const buildTrackingContent = (pathname: string, placement: string) => {
  const route = normalizeToken(pathname) || 'home';
  const slot = normalizeToken(placement) || 'cta';
  return `${route}_${slot}`;
};

export const buildCalBookingUrl = (
  pathname: string,
  placement: string,
  baseUrl = CAL_BASE_URL,
) => {
  const url = new URL(baseUrl);
  url.searchParams.set('utm_source', 'tourma-line');
  url.searchParams.set('utm_medium', 'website');
  url.searchParams.set('utm_campaign', 'booking');
  url.searchParams.set('utm_content', buildTrackingContent(pathname, placement));
  return url.toString();
};

export const conversionEventName = (kind: ConversionKind) => `${kind}_click` as const;

export const buildConversionEvent = (
  kind: ConversionKind,
  pathname: string,
  placement: string,
) => ({
  name: conversionEventName(kind),
  properties: {
    path: pathname || '/',
    placement: buildTrackingContent(pathname, placement),
  },
});
