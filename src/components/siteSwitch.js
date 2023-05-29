const host = window.location.hostname;

export const SiteSwitch = () => {
  if (host.includes('ica-eurasia.com')) {
    return {
      footerDesc: 'ICA Eurasia. Commercial License No: 95244.',
      formUrl: `dev.ica-eurasia.com`,
      title: 'ICA Eurasia',
      mainColor: '#3c6e72',
      darkColor: '#14454A	',
      lightColor: '#77B3B9',
      lighterColor: '#88B4B9',
      backgroundColor: 'rgba(15, 126, 134, 0.6)',
    };
  } else if (host.includes('ica.events')) {
    return {
      footerDesc: 'ICA (JV) LTD – ICA Group. Company number 11499614.',
      formUrl: `wp.ica.events`,
      title: 'ICA Events',
      mainColor: '#3c6e72',
      darkColor: '#14454A	',
      lightColor: '#77B3B9',
      lighterColor: '#88B4B9',
      backgroundColor: 'rgba(15, 126, 134, 0.6)',
    };
  } else if (host.includes('exhibitions-conferences.com')) {
    return {
      footerDesc:
        'I.T.E. EXHIBITIONS & CONFERENCES LIMITED – ITE E&C. Company number 02933850.',
      formUrl: `wp.exhibitions-conferences.com`,
      title: 'EXHIBITIONS & CONFERENCES',
      mainColor: '#de5624',
      darkColor: '#90300C	',
      lightColor: '#EF8159	',
      lighterColor: '#EF9E81',
      backgroundColor: 'rgba(63, 35, 25, 0.6)',
    };
  } else {
    return {
      footerDesc: 'ololo',
      formUrl: `wp.exhibitions-conferences.com`,
      title: 'Developmet Title',
      mainColor: '#de5624',
      darkColor: '#90300C	',
      lightColor: '#EF8159	',
      lighterColor: '#EF9E81',
      backgroundColor: 'rgba(63, 35, 25, 0.6)',
    };
  }
};
