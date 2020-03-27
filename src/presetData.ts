const week = {
  root: {
    title: 'Week',
    children: [
      {
        title: 'Monday',
      },
      {
        title: 'Tuesday',
      },
      {
        title: 'Wednesday',
      },
      {
        title: 'Thursday',
      },
      {
        title: 'Friday',
      },
      {
        title: 'Saturday',
      },
      {
        title: 'Sunday',
      },
    ],
  },
}

const webapp = {
  root: {
    title: 'Building a Web Application',
    children: [
      {
        title: 'TypeScript',
        children: [
          {
            title: 'A typed superset of JavaScript',
          },
          {
            title: 'Open source',
          },
          {
            title: 'Any browser. Any host. Any OS.',
          },
        ],
      },
      {
        title: 'React',
        children: [
          {
            title: 'Declarative',
          },
          {
            title: 'Component-Based',
          },
          {
            title: 'Learn Once, Write Anywhere.',
          },
        ],
      },
      {
        title: 'VS Code',
        children: [
          {
            title: 'Free',
          },
          {
            title: 'Open source',
          },
          {
            title: 'Runs everywhere',
          },
        ],
      },
      {
        title: 'Others',
        children: [
          {
            title: 'Webpack',
          },
          {
            title: 'Babel',
          },
          {
            title: 'ESLint',
          },
        ],
      },
    ],
  },
}

const food = {
  root: {
    title: 'Foods',
    children: [
      {
        title: 'East Asian Cuisine',
        children: [
          {
            title: 'Chinese Cuisine',
            children: [
              {
                title: '徽菜',
              },
              {
                title: '粤菜',
              },
              {
                title: '闽菜',
              },
              {
                title: '湘菜',
              },
              {
                title: '苏菜',
              },
              {
                title: '鲁菜',
              },
              {
                title: '川菜',
              },
              {
                title: '浙菜',
              },
            ],
          },
          {
            title: 'Japanese Cuisine',
          },
          {
            title: 'Korean Cuisine',
          },
        ],
      },
      {
        title: 'West Asian Cuisine',
        children: [
          {
            title: 'Arab Cuisine of the Persian Gulf',
          },
          {
            title: 'Assyrian Cuisine',
          },
          {
            title: 'Bahraini Cuisine',
          },
          {
            title: 'Cypriot Cuisine',
          },
          {
            title: 'Emirati Cuisine',
          },
          {
            title: 'Iranian Cuisine',
          },
          {
            title: 'Iraqi Cuisine',
          },
          {
            title: 'Kuwaiti Cuisine',
          },
          {
            title: 'Omani Cuisine ',
          },
          {
            title: 'Qatari Cuisine',
          },
          {
            title: 'Saudi Arabian Cuisine',
          },
          {
            title: 'Turkish Cuisine',
          },
          {
            title: 'Yemeni Cuisine',
          },
          {
            title: 'Levantine Cuisine',
          },
        ],
      },
      {
        title: 'Southeast Asian Cuisine',
        children: [
          {
            title: 'Bruneian Cuisine',
          },
          {
            title: 'Burmese Cuisine',
          },
          {
            title: 'Cambodian Cuisine',
          },
          {
            title: 'Cuisine of East Timor',
          },
          {
            title: 'Filipino Cuisine',
          },
          {
            title: 'Indonesian Cuisine',
          },
          {
            title: 'Laotian Cuisine',
          },
          {
            title: 'Malaysian Cuisine',
          },
          {
            title: 'Singaporean Cuisine',
          },
          {
            title: 'Thai Cuisine',
          },
          {
            title: 'Vietnamese Cuisine',
          },
        ],
      },
      {
        title: 'South Asian Cuisine',
        children: [
          {
            title: 'Afghan Cuisine',
          },
          {
            title: 'Bangladeshi Cuisine',
          },
          {
            title: 'Bhutanese Cuisine',
          },
          {
            title: 'Indian Cuisine',
          },
          {
            title: 'Maldivian Cuisine',
          },
          {
            title: 'Nepalese Cuisine',
          },
          {
            title: 'Pakistani Cuisine',
          },
          {
            title: 'Sri Lankan Cuisine',
          },
        ],
      },
    ],
  },
}

const presetData = [
  webapp,
  week,
  food,
].map(data => JSON.stringify(data, null, '  '))

export default presetData
