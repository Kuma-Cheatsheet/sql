module.exports = {
    // Make sure that base + repo are in correct cheatsheet
    base: '/sql/',
    title: 'SQL Cheatsheet',
    description: 'Cheatsheet for SQL',

    repo: 'Kuma-Cheatsheet/sql',
    repoLabel: 'Repository',
    editLinks: true,
    editLinkText: 'Help us improve this page!',

    // Official : https://vuepress.vuejs.org/config/#head
    head: [
        ['link', { rel: 'icon', href: 'https://avatars1.githubusercontent.com/u/44744915' }]
    ],

    // Official : https://vuepress.vuejs.org/config/#markdown
    markdown: {
        lineNumbers: 'True',
    },

    // https://vuepress.vuejs.org/plugin/
    plugins: [
        // Official : https://vuepress.vuejs.org/plugin/official/plugin-pwa.html#install
        ['@vuepress/pwa'],

        // Official : https://vuepress.vuejs.org/plugin/official/plugin-medium-zoom.html
        ['@vuepress/medium-zoom'],

        // Official : https://vuepress.vuejs.org/plugin/official/plugin-back-to-top.html
        ['@vuepress/back-to-top'],

        // Official : https://vuepress.vuejs.org/plugin/official/plugin-blog.html
        ['@vuepress/blog'],
    ],

    // Official : https://vuepress.vuejs.org/plugin/official/plugin-pwa.html#options
    updatePopup: 'True',

    // Official : https://vuepress.vuejs.org/theme/default-theme-config.html#sidebar
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            {
                text: 'Contribution',
                items: [
                    {
                        text: 'Contribute', items: [
                            { text: 'Report a problem', link: 'https://github.com/Kuma-Cheatsheet/sql/issues/' },
                            { text: 'Request new resource', link: 'https://github.com/Kuma-Cheatsheet/sql/issues/' },
                            { text: 'Contribute new resource', link: 'https://github.com/Kuma-Cheatsheet/sql/' },
                            { text: 'Development Board', link: 'https://github.com/Kuma-Cheatsheet/sql/projects' },
                        ]
                    },
                    {
                        text: 'Guidelines', items: [
                            { text: 'Contribution Guidelines', link: 'https://github.com/Kuma-Cheatsheet/sql/blob/master/CONTRIBUTING.md' },
                            { text: 'Licensing', link: 'https://github.com/Kuma-Cheatsheet/sql/https://github.com/Kuma-Cheatsheet/sql/blob/master/LICENSE.md/' },
                        ]
                    },
                ]
            },
            {
                text: 'Other Cheatsheet',
                items: [
                    {
                        text: 'Programming Languages', items: [
                            { text: 'Python', link: 'http://kuma-cheatsheet.github.io/python' },
                            { text: 'SQL', link: 'http://kuma-cheatsheet.github.io/sql' },
                        ]
                    },
                    {
                        text: 'Tools', items: [
                            { text: 'SPSS', link: 'http://kuma-cheatsheet.github.io/spss' },
                            { text: 'Git', link: 'http://kuma-cheatsheet.github.io/git' },
                        ]
                    },
                    {
                        text: 'Diagrams', items: [
                            { text: 'Class Diagram (UML)', link: 'http://kuma-cheatsheet.github.io/class-diagram' },
                        ]
                    },
                    {
                        text: 'Others', items: [
                            { text: 'See all', link: 'https://github.com/Kuma-Cheatsheet' },
                        ]
                    }
                ]
            },
            {
                // All child cheatsheet can ignore this if there is no good documentation
                text: 'Documentation',
                items: [
                    { text: 'Official', link: 'https://dev.mysql.com/doc/' },
                    { text: 'DevDocs', link: 'https://devdocs.io/' },
                ]
            },
        ],

        sidebar: [
            // Official : https://vuepress.vuejs.org/theme/default-theme-config.html#sidebar
            {
                title: 'Overall',
                collapsable: false,
                children: [
                    'Overall/Command/',
                    'Overall/DataType/',
                ]
            },
            {
                title: 'Basic Query',
                collapsable: false,
                children: [
                    '/Select/',
                    '/Where/',
                ]
            },
            {
                title: 'Merging Tables',
                collapsable: false,
                children: [
                    '/Join/Inner/',
                    '/Join/Outer/',
                    '/Group/',
                ]
            },
            {
                title: 'Modifying Rows',
                collapsable: false,
                children: [
                    '/Insert/',
                    '/Update/',
                    '/Delete/',
                ]
            },
            {
                title: 'Modifying Columns',
                collapsable: false,
                children: [
                    '/Alter/Add/',
                    '/Alter/Modify/',
                    '/Alter/Drop/'
                ]
            },
            {
                title: 'Tables',
                collapsable: false,
                children: [
                    '/Create/',
                    '/Rename/',
                    '/Drop/',
                    '/Describe/',
                ]
            },
            {
                title: 'Transaction Control',
                collapsable: false,
                children: [
                    '/Commit/',
                    '/Rollback/',
                    '/Savepoint/',
                ]
            },
        ],

        // Official : https://vuepress.vuejs.org/theme/default-theme-config.html#last-updated
        lastUpdated: 'อับเดทล่าสุด',

        // Official : https://vuepress.vuejs.org/theme/default-theme-config.html#service-worker
        serviceWorker: {
            updatePopup: true,
        },
    }
}
