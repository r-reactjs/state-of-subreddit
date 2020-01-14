export default {
    year: 2019,
    parts: ['Demographic', 'Your Tech Stack', 'Subreddit Meta'],
    questions: [
        {
            id: 1,
            part: 1,
            title: 'Occupation Status',
            hasCustom: true,
            answers: [
                {
                    title: 'Student - Current / Recent Undergraduate',
                    count: 20,
                },
                {
                    title: 'Student - Current / Recent Bootcamp Graduate',
                    count: 5,
                },
                {
                    title: 'Job - Developer (Primarily React)',
                    count: 171,
                },
                {
                    title: 'Job - Developer (Primarily React Native)',
                    count: 7,
                },
                {
                    title: 'Job - Developer (Not Primarily React)',
                    count: 64,
                },
                {
                    title: 'Job - Product / Design / IT / Other Generalist',
                    count: 12,
                },
            ],
            customAnswers: [
                {
                    title: 'Self Taught',
                    count: 2,
                },
                {
                    title: 'Hobbyist',
                    count: 1,
                },
                {
                    title: 'Unemployed, trying to get a react job for my first developer job',
                    count: 1,
                }
            ]
        },
        {
            id: 2,
            part: 1,
            title: 'Years of Professional Javascript Experience',
            hasCustom: false,
            answers: [
                {
                    title: 'Less than 1 year',
                    count: 50,
                },
                {
                    title: '1 - 3 years',
                    count: 107,
                },
                {
                    title: '4 - 10 years',
                    count: 93,
                },
                {
                    title: '11+ years',
                    count: 38,
                }
            ]
        },
        {
            id: 3,
            part: 1,
            title: 'Location',
            hasCustom: true,
            answers: [
                {
                    title: 'Africa',
                    count: 4,
                },
                {
                    title: 'Asia',
                    count: 27,
                },
                {
                    title: 'Australia',
                    count: 14,
                },
                {
                    title: 'Europe',
                    count: 121,
                },
                {
                    title: 'North America',
                    count: 109,
                },
                {
                    title: 'South America',
                    count: 5,
                },
            ],
            customAnswers: [
                {
                    title: 'Middle East',
                    count: 2,
                },
                {
                    title: 'India',
                    count: 1,
                },
                {
                    title: 'Dominican Republic',
                    count: 1,
                },
                {
                    title: 'Myanmar',
                    count: 1,
                },
                {
                    title: 'New Zealand',
                    count: 1,
                },
                {
                    title: 'Trinidad And Tobago',
                    count: 1,
                }
            ]
        },
        {
            id: 4,
            part: 2,
            title: 'Build Tooling',
            hasCustom: true,
            answers: [
                {
                    title: 'None',
                    count: 10,
                },
                {
                    title: 'Webpack - Manually setup or an ejected CRA',
                    count: 158,
                },
                {
                    title: 'Parcel',
                    count: 18,
                },
                {
                    title: 'Create React App (CRA) - unejected',
                    count: 174,
                },
                {
                    title: 'GatsbyJS',
                    count: 58,
                },
                {
                    title: 'NextJS',
                    count: 56,
                }
            ],
            customAnswers: [
                {
                    title: 'Rollup',
                    count: 4,
                },
                {
                    title: 'react-native-cli',
                    count: 3,
                },
                {
                    title: 'tsdx',
                    count: 2,
                },
                {
                    title: 'Razzle',
                    count: 1,
                },
                {
                    title: 'Webpacker (Rails)',
                    count: 1,
                },
                {
                    title: 'React native packager',
                    count: 1,
                },
                {
                    title: 'React Boilerplate',
                    count: 1,
                },
                {
                    title: 'Gulp',
                    count: 1,
                },
                {
                    title: 'React Static',
                    count: 1,
                },
            ]
        },
        {
            id: 5,
            part: 2,
            title: 'State Management',
            hasCustom: true,
            answers: [
                {
                    title: 'None - just props drilling',
                    count: 71,
                },
                {
                    title: 'React Context',
                    count: 134,
                },
                {
                    title: 'Redux',
                    count: 180,
                },
                {
                    title: 'Mobx',
                    count: 11,
                },
                {
                    title: 'Apollo Client',
                    count: 57,
                }
            ],
            customAnswers: [
                {
                    title: 'xstate',
                    count: 2,
                },
                {
                    title: 'Zustand',
                    count: 1,
                },
                {
                    title: 'react-atom',
                    count: 1,
                },
                {
                    title: 'RxJS',
                    count: 2,
                },
                {
                    title: 'ReSub',
                    count: 1,
                },
                {
                    title: 'Vuex',
                    count: 1,
                },
                {
                    title: 'reactn',
                    count: 1,
                },
                {
                    title: 'React Hooks',
                    count: 1,
                },
                {
                    title: 'Xstate',
                    count: 1,
                },
                {
                    title: 'simple-react-state',
                    count: 1,
                }
            ],
        },
        {
            id: 6,
            part: 2,
            title: 'CSS Solution / UI Library',
            hasCustom: true,
            answers: [
                {
                    title: 'Vanilla CSS',
                    count: 93,
                },
                {
                    title: 'Sass',
                    count: 139,
                },
                {
                    title: 'PostCSS',
                    count: 37,
                },
                {
                    title: 'Less',
                    count: 13,
                },
                {
                    title: 'Styled-Components',
                    count: 116,
                },
                {
                    title: 'Emotion',
                    count: 33,
                },
                {
                    title: 'Bootstrap / Reactstrap',
                    count: 51,
                },
                {
                    title: 'Bulma',
                    count: 15,
                },
                {
                    title: 'Material-UI',
                    count: 79,
                },
                {
                    title: 'Semantic-UI',
                    count: 15,
                },
                {
                    title: 'Reakit',
                    count: 5,
                },
                {
                    title: 'Company-related UI Library (Atalaskit, Blueprint, Ant Design, Carbon Design)',
                    count: 31,
                }
            ],
            customAnswers: [
                {
                    title: 'ChakraUI',
                    count: 1,
                },
                {
                    title: 'Theme-UI',
                    count: 1,
                },
                {
                    title: 'jss',
                    count: 1,
                },
                {
                    title: 'native-base',
                    count: 1,
                },
                {
                    title: 'react-native Stylesheet',
                    count: 1,
                },
                {
                    title: 'Prime React',
                    count: 1,
                },
                {
                    title: 'ActiveAdmin CSS',
                    count: 1,
                },
                {
                    title: 'Tailwind CSS',
                    count: 3,
                },
                {
                    title: 'Materialize',
                    count: 1,
                },
                {
                    title: 'Fabric',
                    count: 2,
                },
            ]
        },
        {
            id: 7,
            part: 2,
            title: 'Types',
            hasCustom: true,
            answers: [
                {
                    title: 'None',
                    count: 139,
                },
                {
                    title: 'Typescript',
                    count: 136,
                },
                {
                    title: 'Flow',
                    count: 6,
                }
            ],
            customAnswers: [
                {
                    title: 'PropTypes',
                    count: 5,
                },
                {
                    title: 'ReasonML',
                    count: 1,
                }
            ],
        },
        {
            id: 8,
            part: 2,
            title: 'Backend Hosting',
            hasCustom: true,
            answers: [
                {
                    title: 'None - Static JS only',
                    count: 30,
                },
                {
                    title: 'Serverless (Netlify, Firebase, Google Cloud, Azure, AWS)',
                    count: 91,
                },
                {
                    title: 'VPS (Heroku, Digital Ocean, AWS)',
                    count: 93,
                },
                {
                    title: 'Dedicated (Bluehost, HostGator, A2)',
                    count: 3,
                },
                {
                    title: 'Managed (Bluehost, FatCow, iPage)',
                    count: 1,
                },
                {
                    title: 'Colocation (Global Switch, Digital Realty, Local Provider)',
                    count: 4,
                },
                {
                    title: 'Self-hosted / On-site',
                    count: 55,
                }

            ],
            customAnswers: [
                {
                    title: 'SharePoint',
                    count: 2,
                },
                {
                    title: 'App Engine',
                    count: 1,
                },
                {
                    title: 'OpenShift',
                    count: 1,
                },
            ],
        },
        {
            id: 9,
            part: 2,
            title: 'Backend API Format',
            hasCustom: true,
            answers: [
                {
                    title: 'REST',
                    count: 235,
                },
                {
                    title: 'JSON-API',
                    count: 63,
                },
                {
                    title: 'RPC-ish',
                    count: 11,
                },
                {
                    title: 'GraphQL',
                    count: 84,
                },
            ],
            customAnswers: [
                {
                    title: 'Firebase',
                    count: 1,
                },
                {
                    title: 'OData',
                    count: 1,
                },
            ],
        },
        {
            id: 10,
            part: 2,
            title: 'Primarily using React Hooks or Classes?',
            hasCustom: false,
            answers: [
                {
                    title: 'Hooks',
                    count: 183,
                },
                {
                    title: 'Classes',
                    count: 56,
                },
                {
                    title: 'A roughly equal mix of both',
                    count: 49,
                },
            ],
        },
        {
            id: 11,
            part: 2,
            title: 'Frontend Testing',
            hasCustom: true,
            answers: [
                {
                    title: 'None',
                    count: 99,
                },
                {
                    title: 'Jest',
                    count: 166,
                },
                {
                    title: 'Ava',
                    count: 2,
                },
                {
                    title: 'Mocha',
                    count: 26,
                },
                {
                    title: 'Jasmine',
                    count: 12,
                },
                {
                    title: 'Enzyme',
                    count: 56,
                },
                {
                    title: 'Cypress.io',
                    count: 58,
                },
                {
                    title: 'react-testing-library',
                    count: 94,
                }
            ],
            customAnswers: [
                {
                    title: 'Testcafe',
                    count: 5,
                },
                {
                    title: 'Puppeteer',
                    count: 1,
                },
                {
                    title: 'native-testing-library',
                    count: 1,
                },
                {
                    title: 'Codeception',
                    count: 1,
                },
                {
                    title: 'Xstate testing',
                    count: 1,
                },
                {
                    title: 'I should probably learn how to write tests',
                    count: 1,s
                }
            ],
        },
        {
            id: 12,
            part: 2,
            title: 'Server-Side Rendering / Static Site Generators',
            hasCustom: true,
            answers: [
                {
                    title: 'None / Not applicable',
                    count: 176,
                },
                {
                    title: 'GatsbyJS',
                    count: 64,
                },
                {
                    title: 'NextJS',
                    count: 65,
                },
                {
                    title: 'Jekyll',
                    count: 5,
                },
                {
                    title: 'Hugo',
                    count: 4,
                },
                {
                    title: 'NuxtJS',
                    count: 3,
                },
            ],
            customAnswers: [
                {
                    title: 'Gridsome',
                    count: 1,
                },
                {
                    title: 'Custom Built Solution',
                    count: 6,
                },
                {
                    title: 'middleman/django-templates',
                    count: 1,
                },
                {
                    title: 'React Static',
                    count: 1,
                },
                {
                    title: 'React Rails',
                    count: 1,
                },
            ],
        },
        {
            id: 13,
            part: 3,
            title: 'How often do you browse /r/reactjs?',
            hasCustom: true,
            answers: [
                {
                    title: 'Daily',
                    count: 151,
                },
                {
                    title: 'Weekly',
                    count: 93,
                },
                {
                    title: 'Monthly',
                    count: 12,
                },
                {
                    title: 'Rarely - only when I need help / search engine brings me here',
                    count: 23,
                },
            ],
            customAnswers: [
                {
                    title: 'First time browsing now!',
                    count: 4,
                },
                {
                    title: 'Sporadically through personal homepage / front page',
                    count: 3,
                },
            ],
        },
    ]
};