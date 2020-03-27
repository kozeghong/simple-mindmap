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
        title: 'Southeast Asian Cuisine',
        children: [
          {
            title: 'Bruneian cuisine',
          },
          {
            title: 'Burmese cuisine',
          },
          {
            title: 'Cambodian cuisine',
          },
          {
            title: 'Cuisine of East Timor',
          },
          {
            title: 'Filipino cuisine',
          },
          {
            title: 'Indonesian cuisine',
          },
          {
            title: 'Laotian cuisine',
          },
          {
            title: 'Malaysian cuisine',
          },
          {
            title: 'Singaporean cuisine',
          },
          {
            title: 'Thai cuisine',
          },
          {
            title: 'Vietnamese cuisine',
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
