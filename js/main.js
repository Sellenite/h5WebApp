$(function () {
    var images = [
        'imgs/description_bg.gif',
        'imgs/face_bg.png',
        'imgs/face_img_left.png',
        'imgs/face_img_right.png',
        'imgs/face_logo.png',
        'imgs/face_slogan.png',
        'imgs/footer.png',
        'imgs/p1_people.png',
        'imgs/page_bg.png',
        'imgs/page_caption_bg.png',
        'imgs/tail_back.png',
        'imgs/tail_logo.png',
        'imgs/tail_share.png',
        'imgs/tail_slogan.png'
    ]

    var h5 = new H5();

    h5.whenAddPage = function () {
        this.addComponent('slide_up', {
            bg: 'imgs/footer.png',
            css: {
                opacity: 0,
                left: 0, bottom: -20,
                width: '100%', height: '20px', zIndex: 999
            },
            animateIn: {
                opacity: 1, bottom: '-1px'
            },
            animateOut: {
                opacity: 0, bottom: '-20px'
            },
            delay: 500
        });
    }

    h5
        .addPage('face')
        .addComponent('logo', {
            center: true,
            width: 395,
            height: 130,
            bg: 'imgs/face_logo.png',
            css: { opacity: 0 },
            animateIn: { top: 100, opacity: 1 },
            animateOut: { top: 0, opacity: 0 },
        })
        .addComponent('slogan', {
            center: true,
            width: 365,
            height: 99,
            bg: 'imgs/face_slogan.png',
            css: { opacity: 0, top: 180 },
            animateIn: { left: '50%', opacity: 1 },
            animateOut: { left: '0%', opacity: 0 },
            delay: 500
        })
        .addComponent('face_img_left', {
            width: 370,
            height: 493,
            bg: 'imgs/face_img_left.png',
            css: { opacity: 0, left: -50, bottom: -50 },
            animateIn: { opacity: 1, left: 0, bottom: 0 },
            animateOut: { opacity: 0, left: -50, bottom: -50 },
            delay: 1000
        })
        .addComponent('face_img_right', {
            width: 276,
            height: 449,
            bg: 'imgs/face_img_right.png',
            css: { opacity: 0, right: -50, bottom: -50 },
            animateIn: { opacity: 1, right: 0, bottom: 0 },
            animateOut: { opacity: 0, right: -50, bottom: -50 },
            delay: 1000
        })
        .addPage()
        .addComponent('caption', { text: '核心理念' })
        .addComponent('text', {
            width: 500,
            height: 30,
            center: true,
            text: 'IT教育网=只学有用的',
            css: {
                opacity: 0, textAlign: 'center', color: 'red', fontSize: '26px'
            },
            animateIn: { opacity: 1, top: 120 },
            animateOut: { opacity: 0, top: 240 },
        })
        .addComponent('description', {
            center: true,
            width: 481,
            height: 295,
            bg: 'imgs/description_bg.gif',
            css: {
                opacity: 0,
                padding: '15px 10px 10px 10px',
                color: '#fff',
                fontSize: '15px',
                lineHeight: '18px',
                textAlign: 'justify',
                top: 240
            },
            text: '2013年，IT教育网的诞生引领中国IT职业从教育进入新时代；高质量实战课程、全新教学模式、实时互动学习，以领先优势打造行业品牌；迄今为止，IT教育网已成为中国规模最大、互动性最高的IT技能学习平台。',
            animateIn: { opacity: 1, top: 190 },
            animateOut: { opacity: 0, top: 240 },
            delay: 1000
        })
        .addComponent('people', {
            center: true,
            width: 515,
            height: 305,
            bg: 'imgs/p1_people.png',
            css: {
                opacity: 0,
                bottom: 0
            },
            animateIn: { opacity: 1, bottom: 40 },
            animateOut: { opacity: 0, bottom: 0 },
            delay: 500
        })

        .addPage()
        .addComponent('caption', { text: '课程分布方向' })//polyline
        .addComponent('polyline', {
            type: 'polyline',
            data: [['前端开发', .4, '#ff7676'], ['移动开发', .2], ['后端开发', .3, 'blue'], ['图像处理', .1]],
            width: 530,
            height: 300,
            center: true,
            css: { opacity: 0, top: 200 },
            animateIn: { opacity: 1, top: 250 },
            animateOut: { opacity: 0, top: 100 },
        })
        .addComponent('msg', {
            text: '前端开发课程占到40%',
            css: {
                opacity: 0, top: 160,
                textAlign: 'center', width: '100%', color: '#ff7676'
            },
            animateIn: { opacity: 1 },
            animateOut: { opacity: 0 }
        })


        .addPage()
        .addComponent('caption', { text: '移动开发课程资源' })//pie
        .addComponent('pie', {
            type: 'pie',
            data: [
                ['Android', .4, '#ff7676'],
                ['IOS', .3],
                ['Cocos2d-x', .2],
                ['Unity-3D', .1],
            ],
            css: { top: 200 },
            width: 300,
            height: 300,
            center: true
        })
        .addComponent('msg', {
            text: '移动课程 Android 占到40%',
            css: {
                opacity: 0, bottom: 120,
                textAlign: 'center', width: '100%', color: '#ff7676'
            },
            animateIn: { opacity: 1 },
            animateOut: { opacity: 0 }
        })
        .addPage() //bar（bar_v）
        .addComponent('caption', { text: '前端开发课程' })
        .addComponent('bar',
        {
            type: 'bar',

            width: 530,
            height: 600,
            data: [
                ['Javascript', .4, '#ff7676'],
                ['HTML/CSS', .2],
                ['CSS3', .1],
                ['HTML5', .2],
                ['jQuery', .35],
                ['Bootstrap', .05],
                ['AngularJs', .09]
            ],
            css: {
                top: 100,
                opacity: 0
            },
            animateIn: {
                opacity: 1,
                top: 200,
            },
            animateOut: {
                opacity: 0,
                top: 100,
            },
            center: true,
        }
        )
        .addComponent('msg', {
            text: '前端课程 Javascript 占到40%',
            css: {
                opacity: 0, bottom: 120,
                textAlign: 'center', width: '100%', color: '#ff7676'
            },
            animateIn: { opacity: 1 },
            animateOut: { opacity: 0 }
        })

        .addPage() //（bar_v）
        .addComponent('caption', { text: '前端开发课程' })
        .addComponent('bar',
        {
            type: 'bar_v',
            width: 530,
            height: 400,
            data: [
                ['Js', .4, '#ff7676'],
                ['CSS3', .1],
                ['HTML5', .2],
                ['PHP', .05],
                ['jQuery', .35]
            ],
            css: {
                top: 220,
                opacity: 0
            },
            animateIn: {
                opacity: 1,
                top: 200,
            },
            animateOut: {
                opacity: 0,
                top: 220,
            },
            center: true
        }
        )
        .addComponent('msg', {
            text: '前端课程 Javascript 占到40%',
            css: {
                opacity: 0, top: 180,
                textAlign: 'center', width: '100%', color: '#ff7676'
            },
            animateIn: { opacity: 1 },
            animateOut: { opacity: 0 }
        })

        .addPage()
        .addComponent('caption', { text: '后端开发课程' })//radar

        .addComponent('radar', {
            type: 'radar',
            width: 400,
            height: 400,
            data: [
                ['Js', .9, '#ff7676'],
                ['CSS3', .8],
                ['HTML5', .7],
                ['PHP', .6],
                ['jQuery', .5]
            ],
            css: {
                top: 100,
                opacity: 0
            },
            animateIn: {
                opacity: 1,
                top: 200,
            },
            animateOut: {
                opacity: 0,
                top: 100,
            },
            center: true,
        })
        .addPage()
        .addComponent('caption', { text: '课程报名人数过万' })//ring
        .addComponent('ring-all', {
            type: 'ring', center: true,
            width: 300, height: 300,
            data: [['总课程', .7, '#ff7676']],
            css: { top: 120, opacity: 0, fontSize: '30px' },
            animateIn: { opacity: 1 },
            animateOut: { opacity: 0 },
        })
        .addComponent('msg', {
            text: '不同课程报名人数超过一万占比',
            css: {
                opacity: 0, top: 300,
                textAlign: 'center', width: '100%', color: '#ff7676'
            },
            animateIn: { opacity: 1 },
            animateOut: { opacity: 0 },
            delay: 1800,
        })
        .addComponent('ring-1', {
            type: 'ring', center: true,
            width: 140, height: 140,
            data: [['前端开发', .4, 'darkorange']],
            css: { left: 30, bottom: 110, opacity: 0, fontSize: '12px' },
            animateIn: { opacity: 1 },
            animateOut: { opacity: 0 },
        })
        .addComponent('ring-2', {
            type: 'ring',
            width: 140, height: 140,
            data: [['后端开发', .3, 'darkorange']],
            css: { left: 30, bottom: 110, opacity: 0, fontSize: '12px' },
            animateIn: { opacity: 1 },
            animateOut: { opacity: 0 },
        })
        .addComponent('ring-3', {
            type: 'ring',
            width: 140, height: 140,
            data: [['移动开发', .2, 'darkorange']],
            css: { right: 30, bottom: 110, opacity: 0, fontSize: '12px' },
            animateIn: { opacity: 1 },
            animateOut: { opacity: 0 },
        })
        .addComponent('ring-3', {
            type: 'ring',
            width: 140, height: 140,
            data: [['数据处理', .1, 'darkorange']],
            css: { left: 70, bottom: 40, opacity: 0, fontSize: '12px' },
            animateIn: { opacity: 1 },
            animateOut: { opacity: 0 },
        })
        .addComponent('ring-3', {
            type: 'ring',
            width: 140, height: 140,
            data: [['图像处理', .1, 'darkorange']],
            css: { right: 70, bottom: 40, opacity: 0, fontSize: '12px' },
            animateIn: { opacity: 1 },
            animateOut: { opacity: 0 },
        })

        .addPage()
        .addComponent('caption', { text: '课程难度分布' })//point
        .addComponent('point', {
            type: 'point',
            width: 300,
            height: 300,
            data: [
                ['中级', .4, '#ff7676'],
                ['初级', .2, '#ffa3a4', 0, '-60%'],
                ['高级', .3, '#99c1ff', '50%', '-120%']
            ],
            css: {
                bottom: '20%'
            },
            center: true,
        })

        .addPage('tail')
        .addComponent('logo', {
            center: true,
            width: 359,
            height: 129,
            bg: 'imgs/tail_logo.png',
            css: { top: 240, opacity: 0 },
            animateIn: { opacity: 1, top: 210 },
            animateOut: { opacity: 0, top: 240 },
        })
        .addComponent('slogan', {
            center: true,
            width: 314,
            height: 46,
            bg: 'imgs/tail_slogan.png',
            css: { top: 280, opacity: 0 },
            animateIn: { opacity: 1, left: '50%' },
            animateOut: { opacity: 0, left: '0%' },
            delay: 500
        })
        .addComponent('share', {
            width: 128,
            height: 120,
            bg: 'imgs/tail_share.png',
            css: { opacity: 0, top: 110, right: 110 },
            animateIn: { opacity: 1, top: 10, right: 10 },
            animateOut: { opacity: 0, top: 110, right: 110 },
            delay: 1000
        })
        .addComponent('back', {
            width: 52,
            height: 50,
            bg: 'imgs/tail_back.png',
            center: true,
            onclick: function () {
                $.fn.fullpage.moveTo(1)
            }
        })

        .loader(images);

});