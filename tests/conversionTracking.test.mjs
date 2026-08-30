import test from 'node:test';
import assert from 'node:assert/strict';

import {
  buildCalBookingUrl,
  buildTrackingContent,
  conversionEventName,
  buildConversionEvent,
} from '../src/lib/conversionTracking.ts';

test('buildTrackingContent combines route and placement into stable UTM content', () => {
  assert.equal(buildTrackingContent('/', 'hero'), 'home_hero');
  assert.equal(buildTrackingContent('/cartomancie-fecamp', 'primary-cta'), 'cartomancie-fecamp_primary-cta');
  assert.equal(buildTrackingContent('/blog/Mon Article/', 'article cta'), 'blog_mon-article_article-cta');
});

test('buildCalBookingUrl adds attribution without dropping existing query parameters', () => {
  const url = new URL(
    buildCalBookingUrl('/soin-lahochi', 'primary', 'https://cal.com/tourma-line/soin-energetique?duration=60'),
  );

  assert.equal(url.origin + url.pathname, 'https://cal.com/tourma-line/soin-energetique');
  assert.equal(url.searchParams.get('duration'), '60');
  assert.equal(url.searchParams.get('utm_source'), 'tourma-line');
  assert.equal(url.searchParams.get('utm_medium'), 'website');
  assert.equal(url.searchParams.get('utm_campaign'), 'booking');
  assert.equal(url.searchParams.get('utm_content'), 'soin-lahochi_primary');
});

test('conversionEventName exposes the three P0 conversion events', () => {
  assert.equal(conversionEventName('booking'), 'booking_click');
  assert.equal(conversionEventName('whatsapp'), 'whatsapp_click');
  assert.equal(conversionEventName('phone'), 'phone_click');
});

test('buildConversionEvent carries route and placement without personal data', () => {
  assert.deepEqual(buildConversionEvent('booking', '/cartomancie-fecamp', 'hero'), {
    name: 'booking_click',
    properties: {
      path: '/cartomancie-fecamp',
      placement: 'cartomancie-fecamp_hero',
    },
  });
});
