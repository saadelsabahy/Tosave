import React from 'react';
import {MonthlyReportCard} from '../../Components';
import {
  EvacuationIcon,
  HelpDeskIcon,
  HsaDashboardIcon,
  IncidentIcon,
  MaintenanceIcon,
  MonthlyCalendar,
  RisksIcon,
  TrainingIcon,
} from '../../Svgs';
import {FirstAidIcon} from '../../Svgs/FirstAidIcon';

export const WELCOME_DATA = [
  {
    category: 'hse',
    description: 'Health and safety Reports',
    icon: <HsaDashboardIcon />,
    id: 1,
  },
  {
    category: 'Maintainance',
    description: 'Health and safety Reports',
    icon: <MaintenanceIcon />,
    id: 2,
  },
  {
    category: 'Help Desk',
    description: 'Health and safety Reports',
    icon: <HelpDeskIcon />,
    id: 3,
  },
  /*  {
    category: 'Help Desk',
    description: 'Health and safety Reports',
    icon: <HsaDashboardIcon />,
    id: 4,
  }, */
];

export const DASHBOARD_DATA = [
  {
    category: 'monthly reports',
    icon: <MonthlyCalendar />,
    id: 1,
  },
  {
    category: 'risks',
    icon: <RisksIcon />,
    id: 2,
  },
  {
    category: 'training',
    icon: <TrainingIcon />,
    id: 3,
  },
  {
    category: 'incidents',
    icon: <IncidentIcon />,
    id: 4,
  },
  {
    category: 'evacuation',
    icon: <EvacuationIcon />,
    id: 5,
  },
  {
    category: 'first Aid',
    icon: <FirstAidIcon />,
    id: 6,
  },
];

export const LIST_DATA = [
  {
    category: '25 May 2020 Report',
    type: 'Safety System Status',
    date: new Date().toLocaleDateString(),
    id: 1,
    badgeNumber: 10,
  },
  {
    category: '25 May 2020 Report',
    type: 'Safety System Status',
    date: new Date().toLocaleDateString(),
    id: 2,
    badgeNumber: 12,
  },
  {
    category: '25 May 2020 Report',
    type: 'Safety System Status',
    date: new Date().toLocaleDateString(),
    id: 3,
    badgeNumber: 10,
  },
  {
    category: '25 May 2020 Report',
    type: 'Safety System Status',
    date: new Date().toLocaleDateString(),
    id: 4,
  },
  {
    category: '25 May 2020 Report',
    type: 'Safety System Status',
    date: new Date().toLocaleDateString(),
    id: 5,
    badgeNumber: 10,
  },
  {
    category: '25 May 2020 Report',
    type: 'Safety System Status',
    date: new Date().toLocaleDateString(),
    id: 6,
    badgeNumber: 10,
  },
  {
    category: '25 May 2020 Report',
    type: 'Safety System Status',
    date: new Date().toLocaleDateString(),
    id: 7,
    badgeNumber: 10,
  },
  {
    category: '25 May 2020 Report',
    type: 'Safety System Status',
    date: new Date().toLocaleDateString(),
    id: 8,
    badgeNumber: 10,
  },
  {
    category: '25 May 2020 Report',
    type: 'Safety System Status',
    date: new Date().toLocaleDateString(),
    id: 9,
    badgeNumber: 10,
  },
  {
    category: '25 May 2020 Report',
    type: 'Safety System Status',
    date: new Date().toLocaleDateString(),
    id: 10,
    badgeNumber: 10,
  },
  {
    category: '25 May 2020 Report',
    type: 'Safety System Status',
    date: new Date().toLocaleDateString(),
    id: 11,
    badgeNumber: 10,
  },
];

export const MONTHLY_REPORT_JSON_FORM = [
  {
    title: 'pump set panel',
    subtitles: ['power', 'co2', 'water'],
    step: 'first',
  },
  {title: 'Pressure gauge'},
  /* {title: 'Pressure gauge'},
  {
    title: 'pump set panel',
    subtitles: ['power', 'co2', 'water'],
    step: 'first',
  }, */
];
export const MONTHLY_REPORT_DATA = [
  {
    description: 'This place will be to show comment on this picture',
    image:
      'https://www.fireapparatusmagazine.com/wp-content/uploads/content/dam/fa/article/2019/1/FA013119-Naylis.jpg',
    title: 'pump set panel',
  },
  {
    description: 'This place will be to show comment on this picture',
    image:
      'https://www.fireapparatusmagazine.com/wp-content/uploads/content/dam/fa/article/2019/1/FA013119-Naylis.jpg',
    title: 'pump set panel',
  },
  {
    description: 'This place will be to show comment on this picture',
    image:
      'https://www.fireapparatusmagazine.com/wp-content/uploads/content/dam/fa/article/2019/1/FA013119-Naylis.jpg',
    title: 'pump set panel',
  },
  {
    description: 'This place will be to show comment on this picture',
    image:
      'https://www.fireapparatusmagazine.com/wp-content/uploads/content/dam/fa/article/2019/1/FA013119-Naylis.jpg',
    title: 'pump set panel',
  },
  {
    description: 'This place will be to show comment on this picture',
    image:
      'https://www.fireapparatusmagazine.com/wp-content/uploads/content/dam/fa/article/2019/1/FA013119-Naylis.jpg',
    title: 'pump set panel',
  },
  {
    description: 'This place will be to show comment on this picture',
    image:
      'https://www.fireapparatusmagazine.com/wp-content/uploads/content/dam/fa/article/2019/1/FA013119-Naylis.jpg',
    title: 'pump set panel',
  },
];
