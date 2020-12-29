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
    category_ar: 'أنظمة الأمان',
    description: 'Health and safety Reports',
    description_ar: 'تقارير الصحه والامان',
    icon: <HsaDashboardIcon />,
    id: 1,
  },
  {
    category: 'maintenance',
    category_ar: 'الصيانة',
    description: 'Health and safety Reports',
    description_ar: 'تقارير الصحه والامان',
    icon: <MaintenanceIcon />,
    id: 2,
  },
  {
    category: 'Help Desk',
    category_ar: 'الدعم الفني',
    description: 'Health and safety Reports',
    description_ar: 'تقارير الصحه والامان',
    icon: <HelpDeskIcon />,
    id: 3,
  },
];

export const DASHBOARD_DATA = [
  {
    category: 'monthly reports',
    category_ar: 'التقارير الشهرية',
    icon: <MonthlyCalendar />,
    id: 1,
  },
  {
    category: 'risks',
    category_ar: ' المخاطر',
    icon: <RisksIcon />,
    id: 2,
  },
  {
    category: 'training',
    category_ar: 'التدريب',
    icon: <TrainingIcon />,
    id: 3,
  },
  {
    category: 'incidents',
    category_ar: 'تقرير الحوادث',
    icon: <IncidentIcon />,
    id: 4,
  },
  {
    category: 'evacuation',
    category_ar: 'الإخلاء',
    icon: <EvacuationIcon />,
    id: 5,
  },
  {
    category: 'first Aid',
    category_ar: 'الأسعافات الأولية',
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
    description_ar: 'هذا المكان سيكون لإظهار التعليق على هذه الصورة',

    image:
      'https://www.fireapparatusmagazine.com/wp-content/uploads/content/dam/fa/article/2019/1/FA013119-Naylis.jpg',
    title: 'pump set panel',
    title_ar: 'لوحة مجموعة المضخة',
  },
  {
    description: 'This place will be to show comment on this picture',
    description_ar: 'هذا المكان سيكون لإظهار التعليق على هذه الصورة',

    image:
      'https://www.fireapparatusmagazine.com/wp-content/uploads/content/dam/fa/article/2019/1/FA013119-Naylis.jpg',
    title: 'pump set panel',
    title_ar: 'لوحة مجموعة المضخة',
  },
  {
    description: 'This place will be to show comment on this picture',
    description_ar: 'هذا المكان سيكون لإظهار التعليق على هذه الصورة',

    image:
      'https://www.fireapparatusmagazine.com/wp-content/uploads/content/dam/fa/article/2019/1/FA013119-Naylis.jpg',
    title: 'pump set panel',
    title_ar: 'لوحة مجموعة المضخة',
  },
  {
    description: 'This place will be to show comment on this picture',
    description_ar: 'هذا المكان سيكون لإظهار التعليق على هذه الصورة',

    image:
      'https://www.fireapparatusmagazine.com/wp-content/uploads/content/dam/fa/article/2019/1/FA013119-Naylis.jpg',
    title: 'pump set panel',
    title_ar: 'لوحة مجموعة المضخة',
  },
  {
    description: 'This place will be to show comment on this picture',
    description_ar: 'هذا المكان سيكون لإظهار التعليق على هذه الصورة',

    image:
      'https://www.fireapparatusmagazine.com/wp-content/uploads/content/dam/fa/article/2019/1/FA013119-Naylis.jpg',
    title: 'pump set panel',
    title_ar: 'لوحة مجموعة المضخة',
  },
  {
    description: 'This place will be to show comment on this picture',
    description_ar: 'هذا المكان سيكون لإظهار التعليق على هذه الصورة',
    image:
      'https://www.fireapparatusmagazine.com/wp-content/uploads/content/dam/fa/article/2019/1/FA013119-Naylis.jpg',
    title: 'pump set panel',
    title_ar: 'لوحة مجموعة المضخة',
  },
];

export const USERS = [
  {name: 'saad karam', id: 154},
  {name: 'ahmed karam', id: 155},
  {name: 'reda awad', id: 156},
  {name: 'amr mostafa', id: 157},
];
