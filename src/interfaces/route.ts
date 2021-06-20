import { PageStatus } from '~/domains/Page';

export const PathNames = {
  ROOT: '/',
  NOT_FOUND: '/404',
  LOGIN: '/login',
  TERM: '/term',
  HOME: '/home',
  USER: '/user',
  READ: '/read',
  DIRECTORY: '/directory',
  DIRECTORY_ID: '/directory/[id]',
  NEWS: '/news',
  NEWS_ID: '/news/[id]',
} as const;
export type PathNames = typeof PathNames[keyof typeof PathNames];

export const LayoutNames = {
  DEFAULT: 'default',
  DASHBOARD: 'dashboard',
} as const;
export type LayoutName = typeof LayoutNames[keyof typeof LayoutNames];

export const PathConfigs = {
  [PathNames.ROOT]: {
    layout: LayoutNames.DEFAULT,
    statusForFind: [PageStatus.PAGE_STATUS_STOCK],
  },
  [PathNames.NOT_FOUND]: {
    layout: LayoutNames.DEFAULT,
    statusForFind: [PageStatus.PAGE_STATUS_STOCK],
  },
  [PathNames.LOGIN]: {
    layout: LayoutNames.DEFAULT,
    statusForFind: [PageStatus.PAGE_STATUS_STOCK],
  },
  [PathNames.TERM]: {
    layout: LayoutNames.DEFAULT,
    statusForFind: [PageStatus.PAGE_STATUS_STOCK],
  },
  [PathNames.HOME]: {
    layout: LayoutNames.DASHBOARD,
    statusForFind: [PageStatus.PAGE_STATUS_STOCK],
  },
  [PathNames.USER]: {
    layout: LayoutNames.DASHBOARD,
    statusForFind: [PageStatus.PAGE_STATUS_STOCK],
  },
  [PathNames.READ]: {
    layout: LayoutNames.DASHBOARD,
    statusForFind: [PageStatus.PAGE_STATUS_ARCHIVE],
  },
  [PathNames.DIRECTORY]: {
    layout: LayoutNames.DASHBOARD,
    statusForFind: [PageStatus.PAGE_STATUS_STOCK, PageStatus.PAGE_STATUS_ARCHIVE],
  },
  [PathNames.DIRECTORY_ID]: {
    layout: LayoutNames.DASHBOARD,
    statusForFind: [PageStatus.PAGE_STATUS_STOCK, PageStatus.PAGE_STATUS_ARCHIVE],
  },
  [PathNames.NEWS]: {
    layout: LayoutNames.DEFAULT,
    statusForFind: [PageStatus.PAGE_STATUS_STOCK],
  },
  [PathNames.NEWS_ID]: {
    layout: LayoutNames.DEFAULT,
    statusForFind: [PageStatus.PAGE_STATUS_STOCK],
  },
};
